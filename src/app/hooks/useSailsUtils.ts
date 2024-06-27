import { useApi, useAccount } from "@gear-js/react-hooks"
import { useEffect, useState } from "react";
import { Sails, TransactionBuilder } from "sails-js"
import { AnyJson, AnyNumber, IKeyringPair, Signer } from '@polkadot/types/types';
import { web3FromSource } from '@polkadot/extension-dapp';
import { HexString, decodeAddress } from "@gear-js/api";
import { ONE_VARA } from "../consts";

export interface SailsPayload {
    serviceName: string,
    isFunction: boolean,
    actionNameToCall: string,
    arguments: [any],
    increaseGas?: number
}

export const useSailsUtils = () => {
    const { api } = useApi();
    const [sails, setSails] = useState<Sails | null>(null);

    useEffect(() => {
        (async function() {
            if (api) {
                console.log('Se verificara la parte de sails!');
                
                const sailsInstance = await Sails.new();

                console.log('Si paso!!');
                
                sailsInstance.setApi(api);

                setSails(sailsInstance);
            } else {
                setSails(null);
            }
        })();
    }, [api]);


    /**
     * Function that sends a message using a user's voucher.
     * @param userAddress user address
     * @param voucherId voucher id that will be used to pay gas fees
     * @param userMetaSource Account meta source (account.meta.source)
     * @param programId Id of the contract affiliated with the voucher
     * @param programMetadata metadata of the contract to which the message will be sent
     * @param payload payload that will be sent to the contract
     * @param value tokens that are linked to the message
     * @param onSuccess optional callback for a successful transaction
     * @param onFail optional callback for a failed transaction
     * @param onInBlock optional callback for when the block hack has been created
     * @param onLoading callback for when the sending a message part is loaded
     * @returns void
     * @example
     * const payload = {
     *     PlayRound: null
     * };
     * 
     * await sendMessageWithVoucher(
     *     account.decodedAddress,
     *     voucherId,
     *     account.meta.source,
     *     programId,
     *     programPayloadString,
     *     payload,
     *     0, // value associated with the message
     *     () => { console.log('message send!'); },
     *     () => { console.log('Failed while sending message'); },
     *     null,
     *     () => { console.log('the message will be processed') }
     * );
     */
    const callServiceMethodWithVoucher = async (
        userAddress: HexString,
        userMetaSource: string,
        voucherId: HexString,
        programId: HexString,
        programIdl: string,
        payload: SailsPayload, 
        value: bigint,
        onSuccess?: () => void,
        onFail?: () => void,
        onInBlock?: () => void,
        onLoading?: () => void
    ): Promise<void> => {
        return new Promise(async (resolve, reject) => {
            if (!sails) {
                reject("Api is not started");
                return;
            }

            if (value < 0) {
                reject("Value cant be negative");
                return;
            }

            const { signer } = await web3FromSource(userMetaSource);

            sails.setProgramId(programId);
            sails.parseIdl(programIdl);

            if (onLoading) onLoading();

            // try {

            //     let transaction:TransactionBuilder<unknown>;

            //     if (payload.isFunction) {
            //         transaction = await sails
            //         .services[payload.serviceName]
            //         .functions[payload.actionNameToCall](...payload.arguments).withAccount
            //     } else {
            //         transaction = await sails
            //         .services[payload.serviceName]
            //         .queries[payload.actionNameToCall](userAddress, ...payload.arguments);
            //     }

            //     transaction.withAccount(userAddress, { signer });

            //     transaction.withValue(BigInt(value * ONE_VARA));



            //     await transaction.calculateGas(undefined, payload.increaseGas);

            //     const { blockHash, response } = await transaction.signAndSend();

            //     if (onInBlock) onInBlock(blockHash);

            //     const serviceResponse = await response();

            //     if (onSuccess) onSuccess();

            //     resolve(serviceResponse);
            // } catch (e) {
            //     if (onFail) onFail();
            //     reject(e);
            // }



    
            // const totalGas = await api.program.calculateGas.handle(
            //     userAddress,
            //     programId,
            //     payload,
            //     value,
            //     false,
            //     currentProgramMetadata
            // );
  
            // console.log("Gas to spend: ", gasToSpend(totalGas));
  
            // const { signer } = await web3FromSource(userMetaSource);
  
            // const transferExtrinsic = api.message.send({
            //     destination: programId,
            //     payload,
            //     gasLimit: gasToSpend(totalGas),
            //     value,
            //     prepaid: true,
            //     account: userAddress
            // }, currentProgramMetadata);
  
            // const voucherTx = api.voucher.call(voucherId, { SendMessage: transferExtrinsic });
  
            // try {
            //     await signMessage(
            //         userAddress,
            //         signer,
            //         voucherTx,
            //         onSuccess,
            //         onFail,
            //         onInBlock,
            //         onLoading
            //     );
  
            //     resolve();
            // } catch (e) {
            //     console.log("Error while sign transaction");
            //     reject("Error while sign transaction");
            // }
            
        });
    }

    
    // /**
    //  * Function to send a message to a contract using an address
    //  * @param userAddress User address
    //  * @param userMetaSource Account meta source (account.meta.source)
    //  * @param programId Id of the contract to send the message
    //  * @param programMetadata metadata of the contract to which the message will be sent
    //  * @param payload payload that will be sent to the contract
    //  * @param value tokens that are linked to the message
    //  * @param onSuccess optional callback for a successful transaction
    //  * @param onFail optional callback for a failed transaction
    //  * @param onInBlock optional callback for when the block hack has been created
    //  * @param onLoading callback for when the sending a message part is loaded
    //  * @returns void
    //  * @example
    //  * const payload = {
    //  *     PlayRound: null
    //  * };
    //  * 
    //  * await sendMessage(
    //  *     accountAddress,
    //  *     account.meta.source,
    //  *     programId,
    //  *     programMetadataString,
    //  *     payload,
    //  *     0, // value associated with the message,
    //  *     () => { console.log('message send!'); },
    //  *     () => { console.log('Failed while sending message'); },
    //  *     null,
    //  *     () => { console.log('the message will be processed') }
    //  * );
    //  */
    const callServiceMethod = async (
        userAddress: HexString,
        userMetaSource: string,
        programId: HexString,
        programIdl: string,
        payload: SailsPayload,
        value: bigint,
        onSuccess?: () => void,
        onFail?: () => void,
        onInBlock?: (block?: HexString) => void,
        onLoading?: () => void
    ): Promise<any> => {
        return new Promise(async (resolve, reject) => {
            if (!sails) {
                console.log('No se inicializo sails!');
                
                reject("Sails is not started");
                return;
            }

            if (value < 0) {
                reject("Value cant be negative");
                return;
            }

            const { signer } = await web3FromSource(userMetaSource);

            sails.setProgramId(programId);
            sails.parseIdl(programIdl);

            if (onLoading) onLoading();

            try {

                let transaction:TransactionBuilder<unknown>;

                if (payload.isFunction) {
                    transaction = await sails
                    .services[payload.serviceName]
                    .functions[payload.actionNameToCall](...payload.arguments);
                } else {
                    transaction = await sails
                    .services[payload.serviceName]
                    .queries[payload.actionNameToCall](userAddress, ...payload.arguments);
                }

                transaction.withAccount(userAddress, { signer });

                transaction.withValue(BigInt(value * ONE_VARA));

                await transaction.calculateGas(undefined, payload.increaseGas);

                const { blockHash, response } = await transaction.signAndSend();

                if (onInBlock) onInBlock(blockHash);

                const serviceResponse = await response();

                if (onSuccess) onSuccess();

                resolve(serviceResponse);
            } catch (e) {
                if (onFail) onFail();
                reject(e);
            }
        });
    }

    return {
        callServiceMethod
    };

}