import React from 'react'
import { Button } from '@gear-js/vara-ui';
import { useContractUtils, useSailsUtils } from '@/app/hooks';
import { useAccount, useAlert } from '@gear-js/react-hooks';
import { CONTRACT } from '@/app/consts';

import '../ButtonsContainer.css';

export const NormalButtons = () => {
    const { account } = useAccount();
    const { sendMessage } = useContractUtils();
    const { callServiceMethod } = useSailsUtils();
    const alert = useAlert();

    return (
        <div className='buttons-container'>
            <Button onClick={async () => {
                if (!account) {
                    alert.error("Accounts not ready!");
                    return;
                }

                try {
                    const serviceResponse = await callServiceMethod(
                        account.decodedAddress,
                        account.meta.source,
                        CONTRACT.programId,
                        CONTRACT.idl,
                        {
                            serviceName: "Ping",
                            isFunction: true,
                            actionNameToCall: "Ping",
                            arguments: [[null, null]]
                        },
                        0n,
                        () => alert.success('Message sent!'),
                        () => alert.error('Error sending message!'),
                        () => alert.info('Message is in block!'),
                        () => alert.info('Message will load')
                    );

                    console.log(serviceResponse);

                    // await sendMessage(
                    //     account.decodedAddress,
                    //     account.meta.source,
                    //     CONTRACT.programId,
                    //     CONTRACT.metadata,
                    //     {
                    //         Ping: {
                    //             useAccount: [null, null]
                    //         }
                    //     },
                    //     0,
                    //     () => alert.success('message send!'),
                    //     () => alert.error('Error while sending message!'),
                    //     () => alert.info('Message in block!'),
                    //     () => alert.info('will send a message')
                    // );
                } catch (e) {
                    alert.error('Error while sending message');
                }
            }}>
                Send Ping
            </Button>
            <Button onClick={async () => {
                if (!account) {
                    alert.error("Accounts not ready!");
                    return;
                }

                try {
                    const serviceResponse = await callServiceMethod(
                        account.decodedAddress,
                        account.meta.source,
                        CONTRACT.programId,
                        CONTRACT.idl,
                        {
                            serviceName: "Ping",
                            isFunction: true,
                            actionNameToCall: "Pong",
                            arguments: [[null, null]]
                        },
                        0n,
                        () => alert.success('Message sent!'),
                        () => alert.error('Error sending message!'),
                        () => alert.info('Message is in block!'),
                        () => alert.info('Message will load')
                    );

                    console.log(serviceResponse);

                    // await sendMessage(
                    //     account.decodedAddress,
                    //     account.meta.source,
                    //     CONTRACT.programId,
                    //     CONTRACT.metadata,
                    //     {
                    //         Pong: {
                    //             useAccount: [null, null]
                    //         }
                    //     },
                    //     0,
                    //     () => alert.success('message send!'),
                    //     () => alert.error('Error while sending message!'),
                    //     () => alert.info('Message in block!'),
                    //     () => alert.info('will send a message')
                    // );
                } catch (e) {
                    alert.error('Error while sending message');
                }
            }}>
                Send Pong
            </Button>
        </div>
    )
}
