---
date: 2021-04-25T13:07:30
Stage: #edit
Status: #feedback
cover_image: https://images.unsplash.com/photo-1539627831859-a911cf04d3cd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80
expert: Cardano's Native tokens let an admin define bundles of both off-chain and on-chain assets. They can also let others transact and exchange these tokens using the same wallets they keep their ADA (the blockchain's core asset).
layout: article
published: true
description: "A practical breakdown of multi-asset tokens"
tags:
  ["Cardano", "Native tokens", "Decentralization", "Fintech", "Cryptocurrency"]
title: "Understand Cardano Native tokens"
---

In March 2021, the [Cardano developers released the Mary hark fork to the Cardano mainnet](https://forum.cardano.org/t/the-mary-hard-fork-faq-everything-you-need-to-know/50971) that added the ability for people to create user-defined tokens.

Cardano calls them “Native tokens” because users can store and value custom bundles of assets directly on the public infrastructure without having to rely on additional programming (sometimes called "smart contracts" on other platforms).

This core update is significant because it enables secure token governance on the Cardano ledger with relatively little overhead.

> **Note**: As of this writing, the only wallet that can transact Native tokens is Daedalus.

## Cardano is a Multi-Asset platform

![named after Gothic novel author Mary Shelley](https://images.unsplash.com/photo-1508931392324-26ab8a2645e3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80)<small>(Cardano's network update named after author Mary Shelley)</small>

With the [Mary update](https://iohk.io/en/blog/articles/2021/02/04/native-tokens-to-bring-new-utility-to-life-on-cardano/), users can take non-ADA assets, like dollars, Bitcoins, stock/shares, or other items of value, and bundle them as a “multi-asset” token through the use of so called "native tokens".

As implied by the name, this approach lets users handle their custom transactions “natively” on the blockchain. This mean administrators require no additional logic to handle the minting, burning, or transacting of these tokens. The complex logic lives on the Cardano blockchain via a domain-specific language that expresses the governing rules in a manner that is both human and machine readable.

Since Cardano native token policies are written in a human-readable format, their policies provide a reliable system for turning off-chain assets into digital assets. This lets administrators store and update their data on a distributed ledger technology that other users can exchange for alternative currencies.

A Cardano **token bundle** stores the value, ownership, and description of assets in secure abstraction so that both humans and computers can read. These strategies help separate layers so that complex records of valuables that live off the block chain can compile into minting policies.

Now administrators can express their valuables “bundled” as tokens. Then further policies can help secure who can create, update, and destroy these tokens. All without having to write a single `if` statement.

To understand a token bundle and its policy, it’s also important to understand how Cardano defines an asset.

### Cardano Assets

According to [Cardano developers documentation](https://developers.cardano.org/en/development-environments/native-tokens/multi-asset-tokens-explainer/), admins can represent an asset as either a class of objects (like a coin) or a particular quantity of a specific object (like several tickets to an event).

> An *asset* is an object that represents value on the blockchain. These objects can be a variety of things, such as a digital asset like ADA, a role, a credential, or a quantity of goods.

Every asset has a unique combination of IDs and names to help represent and secure value.

### Asset Identification

Every token has a **asset name** and **policy ID**. Together, this creates the **asset id**.

```haskell
Asset ID = Asset Name + Policy ID
```

The asset name does **not** need to be unique, so it is the policy ID that keeps a record of who owns what and what can be exchange (what is fungible vs non-fungible).

- **Asset Name** - user definable, but there's no way to reserve an asset name (you can have many assets of the same name, for good reason, or nefarious). The policy ID helps keep things safe.

- **Policy ID** - user definable and keeps assets secure by coupling a unique value computed by applying a hash to the minting policy itself. Further controls who can create or destroy tokens.

### Minting Policy

A minting policy is a set of rules that specifies the conditions that tokens can be created or destroyed. Cardano naively supports the multi-signature scripts with no extra set up or code using the [multisig scripting language](https://github.com/input-output-hk/cardano-node/blob/c6b574229f76627a058a7e559599d2fc3f40575d/doc/reference/simple-scripts).

These rules govern who has control over the asset and supply. We can express them in several formats, ranging from simple ANDs and ORs. This lets the minter specify the required set of signatures allowed to perform a certain action with no extra smart contracts or logical programming.

For example, built into the Cardano core, the default rule set allows you to limit what signatures a person needs to mint a coin. This simple parameter is an effective mechanism to help a coins treasure put in a reliable layer of security that prevents others from maliciously burning or minting tokens in their favor.

There is also the built in option to specific exactly what slot we can spend the token. This can prevent tokens from being created after a certain number (like minting a reserve of a certain amount of assets and committing not to burn them for a specified time.)

## Token Bundles

![Token bundles](https://images.unsplash.com/photo-1605792657660-596af9009e82?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1291&q=80)

Token bundles organize the way assets are represented and stored on the Cardano blockchain.

The token bundle itself is a script policy that stores values in a data structure. This can be from one or an arbitrary split of multiple files.

Cardano relies on the efficiency of the UXTO ledger that keeps all this possible.

### UXTO Ledger

Dating back to Bitcoin, we have had the concept of unspent transaction output (UXTO) model ledgers. If you recall how bitcoin processes transactions, the UXTO is the value of the digital currency remaining _after_ the blockchain node executes a cryptocurrency transaction. So when the transaction finishes, it can deposit the unspent amount back into the database as an input and used again for another transaction.

This gives a two-layer solution to the ledger, but does not provide perfect interchangeability of assets.

With Ethereum, we have had the concept of smart contracts. This enabled wide rage of use cases, but requires custom code. And because it did not directly support this code on the distributed ledger, Ethereum tokens are not only complex but also known for several associated security risks and famous security incidents.

Cardano has introduced an extension of the UXTO model with a new accounting structure that lets administrators manage the supply of user-defined tokens through the definition of policy scripts. These scripts use a strict human-readable language that gives administrators both the value of computational security and a breadth of new ideas that we can communicate throughout the network.

The public Cardano blockchain ledger tracks outputs in every UTXO set.

### Token bundle example

Here is an example of a member token bundle in a file we called Member_Tokens_Example.script that keeps a balance of member currencies.

```haskell
Member_Tokens_Example.script

{
MemberATokenPolicyID {(IOTA, 100),
                    (BTC, 0.001),
                        (USD, 500)}


MemberBTokenPolicyID {(ETH, 1),
                        (ADA, 1000)}
                        (BTC, 0.015),

MemberCTokenPolicyID {(ONE, 1000),
                        (ADA, 750)}
                        (BTC, 0.1),
}
```

Cardano saves token bundles in two places in the course of a transaction:

1. As output return values:

```bash
./cardano-cli transaction policyid --script-file ./policy/Member_Tokens_Example.script
```

- _Example return_

```bash
328a60495759e0d8e244eca5b85b2467d142c8a755d6cd0592dff47b
```

- Which is used to build a new transaction.

```bash
./cardano-cli transaction build-raw ... 328a60495759e0d8e244eca5b85b2467d142c8a755d6cd0592dff47b
```

2. Alternative, the policy can be passed as a parameter of another policy in a transaction:

```haskell
Multi { MyAddress, value: Member_Tokens_Example}
```

### Meta-data registry

Although the Cardano network keeps tract of the transactions, there is also a need to keep track of all the unique native tokens managed on the blockchain.

Keeping track of this custom native token information is done by storing meta-data in a token registry managed by the public community (technically, in [Github repos that store user-submitted metadata](https://github.com/cardano-foundation/cardano-token-registry) ).

The **cardano-token-registry** is designed to ensure public trust in the datasets and helps ensure full decentralization. In existence, Cardano Native token registry helps ensure that the Cardano network users themselves are the owners of the data.

[Learn how to register a Native token (and how doing so betters the Cardano ecosystem))](Learn%20how%20to%20register%20a%20Native%20token%20(and%20how%20doing%20so%20betters%20the%20Cardano%20ecosystem)

The Cardano Native blockchain takes creative use of existing technologies and lessons from other technologies to provide a new and exiting mechanism that can be applied to an infinite number of business cases.

## Footnotes

- [Native tokens to bring new utility to life on Cardano - IOHK Blog](//decentfintech.net/resources/cardano/Native%20tokens%20to%20bring%20new%20utility%20to%20life%20on%20Cardano%20-%20IOHK%20Blog)
- [Building native tokens on Cardano for pleasure and profit - IOHK Blog](//decentfintech.net/resources/cardano/Building%20native%20tokens%20on%20Cardano%20for%20pleasure%20and%20profit%20-%20IOHK%20Blog)
- [Cardano’s Extended UTXO accounting model – built to support multi-assets and smart contracts (part 2) - IOHK Blog](<//decentfintech.net/resources/cardano/Cardano’s%20Extended%20UTXO%20accounting%20model%20–%20built%20to%20support%20multi-assets%20and%20smart%20contracts%20(part%202)%20-%20IOHK%20Blog>)
- [Announcing a new round of community stake pool delegation - IOHK Blog](/Announcing%20a%20new%20round%20of%20community%20stake%20pool%20delegation%20-%20IOHK%20Blog)
- [Native tokens on Cardano; core principles and points of difference - IOHK Blog](//decentfintech.net/resources/cardano/Native%20tokens%20on%20Cardano;%20core%20principles%20and%20points%20of%20difference%20-%20IOHK%20Blog)
- [UTXOmaUTXO with Multi-Asset Support - IOHK Research](UTXOmaUTXO%20with%20Multi-Asset%20Support%20-%20IOHK%20Research)
- [Multi-Asset Tokens Explainer](//decentfintech.net/resources/cardano/Multi-Asset%20Tokens%20Explainer)
- [Native tokens on Cardano - IOHK Blog](//decentfintech.net/resources/cardano/Native%20tokens%20on%20Cardano%20-%20IOHK%20Blog)
