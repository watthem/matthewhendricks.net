---
cover_image: "https://mscott.b-cdn.net/images/sundaeswap/welcometopublictestnetbeta20211211224241.png"

date: 2021-12-11

description: "One of the most talked about DApps will be introduced soon. I will show you the experience starting at this week's first beta release."

published: true

tags: ["decentralization", "cardano", "dapp", "fintech"]

title: SundaeSwap on Cardano Testnet

created: 2021-12-11T23:47:17
---

## Overview

[SundaeSwap](https://sundaeswap.finance/) is a decentralized exchange (DEX) and one of the first of its kind to run on the Cardano network.

![https://mscott.b-cdn.net/images/sundaeswap/SundaeSwaponTestnet20211211225529.png](https://mscott.b-cdn.net/images/sundaeswap/SundaeSwaponTestnet20211211225529.png)

There are other wonderful DEXs existing on other networks like Ethereum and Harmony. But many are eager to see what the client experience is going to be for one of the first robust offerings to be ready in the Cardano ecosystem.

### If you're new to the Cardano ecosystem

Let's simplify before we get started.

Cardano is a decentralized ledger that works similarly to Ethereum, but signs and stores transactions more closely to Bitcoin. It's important to understand the Ethereum keeps a real-time "Account" model, similar to how a bank does. Cardano has gone back to the drawing board and offers an extension to the [uXTO model](https://en.wikipedia.org/wiki/Unspent_transaction_output), and provides a [new way to process and assign ownership](https://iohk.io/en/research/library/papers/the-extended-utxo-model/) to objects on a blockchain.

![https://docs.cardano.org/static/98785c30bd93c58d5457df010020b804/5a190/eutxo_diagram.png](https://docs.cardano.org/static/98785c30bd93c58d5457df010020b804/5a190/eutxo_diagram.png)

- Read more about [UTXO and EUTXO on Cardano's docs](https://docs.cardano.org/plutus/eutxo-explainer)

I believe it’s important to understand because there will be a fundamental difference in how we use these platforms.

![https://miro.medium.com/max/1000/1*3LVsWbgP2TVCFHGObBjWVA@2x.png](https://miro.medium.com/max/1000/1*3LVsWbgP2TVCFHGObBjWVA@2x.png)

- Coming from other blockchains, we need to [adjust expectations of how a DEX works](https://sundaeswap-finance.medium.com/concurrency-state-cardano-c160f8c07575).

But today we're talking about SundaeSwap, so let's get to it!

## Welcome and Onboarding

To get started, enter the app from <https://sundaeswap.finance> and when you press the playfully placed **Beta Guide** CTA, you're prompted to download and install the [Nami Wallet](https://namiwallet.io/) for your desktop as a Chrome, Brave, or Edge extension. This also requires you to set up a Nami wallet pass phrase and password. Once set up, you can send [Cardano's testnet](https://testnets.cardano.org/en/testnets/cardano/tools/faucet/) funds for your new Nami address.

![https://mscott.b-cdn.net/images/sundaeswap/welcometopublictestnetbeta20211211224241.png](https://mscott.b-cdn.net/images/sundaeswap/welcometopublictestnetbeta20211211224241.png)

- There's an intro welcoming you to set up **Nami Wallet browser extension**, then **Connect** and **Fund** Your Wallet. Nami is the only supported wallet, but works similar to Yoroi or MetaMask.

![https://mscott.b-cdn.net/images/sundaeswap/sweetexchangeconnectwalletprompt20211211211747.png](https://mscott.b-cdn.net/images/sundaeswap/sweetexchangeconnectwalletprompt20211211211747.png)

> _Note_: I already had Nami installed with **testnet funds**. If you're coming from Daedalus/Yoroi, read the [Nami Wallet FAQ](https://namiwallet.io/) as their disclaimer says they "prefer to create a new wallet for Nami to avoid confusion and keep the user experience great".

![https://mscott.b-cdn.net/images/sundaeswap/mobilewalletprompt20211211225707.png](https://mscott.b-cdn.net/images/sundaeswap/mobilewalletprompt20211211225707.png)

- On mobile, a friendly reminder to the beta guide that sets some reasonable expectations for a beta dex.

### Connect Your Wallet and Funding

![https://mscott.b-cdn.net/images/sundaeswap/connectyourwallet20211211211818.png](https://mscott.b-cdn.net/images/sundaeswap/connectyourwallet20211211211818.png)

- When you select the **Connect Wallet** button, a modal appears letting you select the only supported wallet at this stage (Nami wallet).

### Allowing access for SundaeSwap on testnet

![https://mscott.b-cdn.net/images/sundaeswap/accessyourwallet20211211211837.png](https://mscott.b-cdn.net/images/sundaeswap/accessyourwallet20211211211837.png)

- If you've ever used other DEXs like UniSwap or Sushiswap along with MetaMask, this workflow should look pretty familiar. If not, basically we are giving SundaeSwap **Access** to connect to Nami, our wallet with funds.

### Nami provides my sweet address

![https://mscott.b-cdn.net/images/sundaeswap/sweetaddress20211211211848.png](https://mscott.b-cdn.net/images/sundaeswap/sweetaddress20211211211848.png)

- Your **wallet address** displays on the wallet button and interacting with it gives you option to see details, look at transactions, or disconnect (more on these transaction details later).

> _Tip_: If you need funds for testnet, you can easily get some **test Ada** (tAda) from the [faucet on the Cardano website](https://testnets.cardano.org/en/testnets/cardano/tools/faucet/)

## Now let's get swapping

I went to the [/swap](https://testnet.sundaeswap.finance/#/swap) page and threw in one of the top tokens I saw listed on the exchange, **RBERRY**.

![https://mscott.b-cdn.net/images/sundaeswap/selectatoken20211211212046.png](https://mscott.b-cdn.net/images/sundaeswap/selectatoken20211211212046.png)

- Showing my ADA testnet balance from Nami wallet, sweet.

![https://mscott.b-cdn.net/images/sundaeswap/swappingadaforrberry20211211212015.png](https://mscott.b-cdn.net/images/sundaeswap/swappingadaforrberry20211211212015.png)

- 100 testnet ADA bucks sounds like a fair **Swap** to me.

### Confirm Swap

![https://mscott.b-cdn.net/images/sundaeswap/confirmswap20211211212318.png](https://mscott.b-cdn.net/images/sundaeswap/confirmswap20211211212318.png)

![https://mscott.b-cdn.net/images/sundaeswap/confirmholdtoswap20211211212116.png](https://mscott.b-cdn.net/images/sundaeswap/confirmholdtoswap20211211212116.png)

- To swap, you literally need to hold down your mouse for several seconds to allow the transaction.

> A note on the **Hold to Swap** - there is a neat animation that happens and updates when it is ready for you to release the transaction. As a former Product Manager who worked on these types of UX issues for a trading platform, I am pretty thrilled with that experience. I think that was a cool way to add a little more control and caution to a trader’s discretion. While there might be some technical reasons for this type of confirmation, like many aspects of SundaeSwap, the design is just fun. I will not spoil that part, just [go check it out for yourself](https://sundaeswap.finance/#/swap).

### Swapping 100 ADA for RBERRY

![https://mscott.b-cdn.net/images/sundaeswap/swappingADAforRBERRY20211211212337.png](https://mscott.b-cdn.net/images/sundaeswap/swappingADAforRBERRY20211211212337.png)

- Looks good.

### Signing The Request

![https://mscott.b-cdn.net/images/sundaeswap/Signtransaction20211211212352.png](https://mscott.b-cdn.net/images/sundaeswap/Signtransaction20211211212352.png)

- That's the right amount + fees.

### And don't forget that Spending Password

![https://mscott.b-cdn.net/images/sundaeswap/confirmpassword20211211212420.png](https://mscott.b-cdn.net/images/sundaeswap/confirmpassword20211211212420.png)

- (and Nami is a slick-looking wallet, btw).

## Ok, well, that's about as far as it's going to go, with no volume

![https://mscott.b-cdn.net/images/sundaeswap/swappingada20211211212435.png](https://mscott.b-cdn.net/images/sundaeswap/swappingada20211211212435.png)

So again, this is a beta demo on a testnet. If there was volume between these pairs, I might have more to share. But let's look at the user interface in this state, because it gives us a great time to review what you might need to do in case an order was pending. As you know, any exchange is basically zero-sum. For there to be buyers, there needs to be sellers.

If you're new to using DEXs, it's not uncommon for a desired trade to take time for there to be sufficient interest in your order to complete. It might be worth considering how you are going to handle a trade if that happens. So let's look at that while we're here...

### See the pending transaction

![https://mscott.b-cdn.net/images/sundaeswap/pendingorder20211211212718.png](https://mscott.b-cdn.net/images/sundaeswap/pendingorder20211211212718.png)

- You can get to the order status by selecting the Wallet menu's **Transaction** tab.

![https://mscott.b-cdn.net/images/sundaeswap/awaitingescrow20211211212655.png](https://mscott.b-cdn.net/images/sundaeswap/awaitingescrow20211211212655.png)

- Cancel order options for outstanding **Pending** orders

### Waiting on that position update

![https://mscott.b-cdn.net/images/sundaeswap/walletposition20211211212853.png](https://mscott.b-cdn.net/images/sundaeswap/walletposition20211211212853.png)

- From the [portfolio](https://sundaeswap.finance/#/portfolio) page, you can see the ADA amount from before has been subtracted because of the order pending.

### Checking on Pending Transactions

![https://mscott.b-cdn.net/images/sundaeswap/pendingcancel20211211214505.png](https://mscott.b-cdn.net/images/sundaeswap/pendingcancel20211211214505.png)

- Eventually I got a pop up toast that let me know that the order updated, but I wasn't able to get the screen shot in time. Going back through the Wallet's menu shows **Your Transactions** where the order is now Awaiting Escrow.

### Canceling Orders

![https://mscott.b-cdn.net/images/sundaeswap/cancelingorder20211211222101.png](https://mscott.b-cdn.net/images/sundaeswap/cancelingorder20211211222101.png)

- The wallet button shows this cancel is pending while the Nami wallet UI opens.

![https://mscott.b-cdn.net/images/sundaeswap/signingcancel20211211222134.png](https://mscott.b-cdn.net/images/sundaeswap/signingcancel20211211222134.png)

- After selecting cancel order, you need to sign the request.

![https://mscott.b-cdn.net/images/sundaeswap/cancelingorder20211211222243.png](https://mscott.b-cdn.net/images/sundaeswap/cancelingorder20211211222243.png)

- Cancel pending. Again, after a short time, there was a little toasty that popped up to let me know the most recent state of the order was successful (but I wasn't able to get that screen shot in time).

## Summary

While it was great to play with the SundaeSwap UI, I still have not interacted with any testnet transactions. When the mainnet goes live, I will dedicate time to playing with functionality other than swapping, such as the various product pools that help swappers earn from similar products popularized by Uniswap. You can read more from [SundaeSwap's Whitepaper](https://sundaeswap.finance/papers/SundaeSwap-2021-06-01-Fundamentals.pdf) and https://sundaeswap.finance/faq

Cardano's power is in its staking capabilities, and DEXs are maturing beyond simple means of quickly getting from one coin to another. The intrinsic value you will see coming from products like SundaeSwap is liquidity pools with attractive staking rewards and other community-owned decentralized financial infrastructure.

Swapping in Cardano is likely only to be used for getting into or out of pools. The time it takes for a block to update is going to change the way we use these platforms, but that's also another story for another time.

Next, I will look at some of the Liquidity Pools and dive into some features of those pools designed to get more utility out of your cryptocurrencies.
