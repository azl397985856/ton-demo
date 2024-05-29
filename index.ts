import { TonConnectUI } from '@tonconnect/ui'
import { tonkeeper1234 } from './mock'

// @ts-ignore
window.tonkeeper1234 = tonkeeper1234

const tonConnectUI = new TonConnectUI({
    manifestUrl: 'https://ton-connect.github.io/demo-dapp-with-react-ui/tonconnect-manifest.json',
    buttonRootId: 'connect'
});

tonConnectUI.uiOptions = {
    walletsListConfiguration: {
        includeWallets: [
            {
                appName: "tk",
                name: "tk",
                imageUrl: "https://s.pvcliping.com/web/public_image/SafePal_x288.png",
                tondns: "",
                aboutUrl: "https://www.safepal.com",
                jsBridgeKey: "tonkeeper1234",
                platforms: ["macos"]
            },
            {
                appName: "new-wallet",
                name: "new-wallet",
                imageUrl: "https://s.pvcliping.com/web/public_image/SafePal_x288.png",
                tondns: "",
                aboutUrl: "https://www.safepal.com",
                jsBridgeKey: "tonkeeper123",
                platforms: ["macos"]
            }
        ]
    }
}


async function sign() {
    const transaction = {
        validUntil: Math.floor(Date.now() / 1000) + 60, // 60 sec
        messages: [
            {
                address: "EQBBJBB3HagsujBqVfqeDUPJ0kXjgTPLWPFFffuNXNiJL0aA",
                amount: "20000000",
                // stateInit: "base64bocblahblahblah==" // just for instance. Replace with your transaction initState or remove
            },
            {
                address: "EQDmnxDMhId6v1Ofg_h5KR5coWlFG6e86Ro3pc7Tq4CA0-Jn",
                amount: "60000000",
                // payload: "base64bocblahblahblah==" // just for instance. Replace with your transaction payload or remove
            }
        ]
    }

    try {
        document.querySelector('#transaction')!.innerHTML = JSON.stringify(transaction)
        const result = await tonConnectUI.sendTransaction(transaction);
        document.querySelector('#transaction-result')!.innerHTML = JSON.stringify(result)
        console.log('result', result)
        // // you can use signed boc to find the transaction 
        // const someTxData = await myAppExplorerService.getTransaction(result.boc);
        // alert('Transaction was sent successfully', someTxData);
    } catch (e) {
        console.error(e);
    }
}

async function t() {

    const walletsList = await tonConnectUI.getWallets();

    console.log('walletsList', walletsList)
    // await tonConnectUI.openModal();
}

t()

document.querySelector('#sign')?.addEventListener('click', sign)