---
title: What is stopping you from optimizing your portfolio
created: 2021-09-30T06:59:18
date: 2021-09-30
cover_image: "https://images.unsplash.com/photo-1519766277046-4d701c174ab2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1341&q=80"
excerpt: "While it's nice to believe that the strategy you poured hours into crafting works the same as you expect it often is not the reality. Instead of feeling overwhelmed when you realized these problems exist, you can use your knowledge to learn how to incorporate into your financial decision making."
description: "Attempts to maximize portfolio returns and financial decision making often is blinded by our biases that are impossible to see."
tags: ["fintech", "trading"]
published: true
---

## Approaches to maximize portfolio returns

To maximizes the investor’s portfolio return over a series of many different securities, there are two general strategies to consider:

- **What you can do with it**: expected utility of the individual securities
- **What it can do for you**: performance of each security measured over a specific period

In either approach, it's important to optimize the input parameters to help estimate the risk and reward of each portfolio by considering things such as the time or frequency that the investments should be made.

### Maximizing investments over time

For investors to maximize profits, it's common for financial advisors to simply recommend a strategy of **Time Diversification**[[1](#1])].

The general idea is that the longer period your portfolio investments are held, the more resilient it should be to market swings, and overall the better your performance will follow.

This a similar mentality that comes with **Dollar Cost Averaging**: instead of putting all your money in at once, the less money you put in over a longer period, the less you will be exposed to wild ups and downs, while still taking advantage of a long investment horizon.

To maximize your time diversification strategy, it's helpful to look over historical data to consider various inputs to get an idea of the best timing for your personal tolerance to risk. Investors often turn to software to model these inputs over various conditions.

### What's wrong with that?

When it comes to estimating the risk and return against two different portfolios, the problem with the time diversification approaches comes two limiting factors:

- **Uncertainty in making investment decisions** due to the data-generating process (DGP) [[2](#2)]
- **Limited access to historical data** especially on modern securities [[3](#3)]

Let's look at these factors a little closer.

## The uncertainty of financial decision-making

There's an infinite number of problems that occur naturally in the data-generating process. This creates the **data generating process uncertainty** problem.

Before we dive into these details, I would like to consider what makes this problem so much more complicated is that often investors operate under the idea that there is _no_ alternative data set — some believe that there is no variance and this theory of relatively stuff is for nerds.

When I worked customer service in Fintech, it was frequent someone would come to us with any range of emotions, from curious to hysterical, about the fact that strategy was not performing the same as when it tested.

While it's nice to believe that the strategy you poured hours into crafting works the same as you expect it often is not the reality.

Instead of feeling overwhelmed when you realized these problems exist, you can use your knowledge to learn how to incorporate into your financial decision making.

### Problems with the Data Generating Process

If you are an investor, you are probably familiar with the curious experience of looking at the historical returns of a particular security and comparing to how these returns play out in real-time.

For example, a trader who is looking at a monthly balance sheet and comparing it to how a trading system performed is probably going to run into instances of discrepancies of some measure.

Could it be that the security had a poor month versus the period that it was tested on? Or could it be a flaw in the system? Was there a distribution issue with the data set? What happened during live execution - what transactions occurred as expected? Was there a larger spread in price or uptick in volume that was unexpected? Unanticipated fear from over seas? Global pandemic? How often is that going to happen?

When faced with these problems, it's hard to know if the distribution of variances is within a normal range or not. This is known at the data-generating process uncertainty.

> "data-generating process (DGP) uncertainty ... occurs when an investor does not know whether the data is generated from a population model with a normal distribution or not."[[1](#1)]

Even without considering these multi-variance factors, there's still a huge issue facing every trading system today.

### Limited Access to Data

The second problem with time diversification is that, to accurately estimate input over a longer investment horizon, even the most mature markets would not give you insight beyond 15 or 20 years.

Not only are there limits to the amount of quality historical data offered to be processed, there can be cost restrictions to accessing this data in some cases and other cases the data just isn't there.

When you start looking at newer commodities, including cryptocurrencies, but also newer technology stocks and ETFs introduced over the last 5 to 10 years only have that amount data to work on a back-test.

## Reducing bias in randomness

Some investors turn to optimizations using backtesting models. These can be helpful, but it's important to understand not only limits of data processing, but also limits in how returns are generated.

Randomness is one way to test a model, but it requires assumption that the resulting data can be produced equally - in any order. Dating back to 1979[[4](#4)], we have used a process known as Bootstrapping, and is arguably a better estimate of probability (if you're into assuming that sort of thing).

The standard boostrap method performs statistical randomization tests if to test theory that the stock returns are independent over time. In this process, individual observations are made on each stock. It also assumes the stock portfolio returns are independent and identically distributed.

Unfortunately there are still problems to over come when picking a block bootstrap model. For the Long Run[[3](#3)], research give us a clue: determining whether or not your portfolio trades in parallel is crucial, otherwise the standard bootstrap destroys any returns.

### Over or underestimated?

The research indicates that the approach you take to over come limitations in resampling portfolio data depends entirely on how you approach how each portfolio is correlated.

In some cases, you may over estimate the risk by choosing a back testing model on a series whose returns are highly correlated. On the other hands, you can severely underestimate your risk if the returns are correlated. That why it is crucial to first consider the correlation/relationship behind your portfolio before you even start to optimize it.

### Choosing wisely

To correctly implementing a block bootstrap method, you need to consider a portfolio whose series of returns are either:

- independent over time
- mean-reverting

What the research indicates is If your portfolio is made up of securities that are uncorrelated, than using a standard bootstrap model is acceptable. But this process breaks down when there is a dependency in the series of returns.

So if you have a more complex portfolio, like with many cryptocurrencies where the returns are serially dependent on the performance of particular asset, then it helps if you use a method that where you find an overlap the samples of data. The higher the correlation in your portfolio, the better your returns. So your goal is to optimize over a series of returns, it's crucial that you first identify if series of securities that trade together before running tests. Otherwise you risk an miscalculation of risk.

## References

### 1

- Beach
- "Semivariance in Asset Allocations: Longer Horizons Can Handle Riskier Holdings"
- <https://www.researchgate.net/publication/254067270_Semivariance_in_Asset_Allocations_Longer_Horizons_Can_Handle_Riskier_Holdings>
- January 2007

### 2

- Jun Tua , Guofu Zhoub
- "Data-generating process uncertainty: What difference does it make in portfolio decisions"
- <https://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.201.2870&rep=rep1&type=pdf>
- 2002

### 3

- Philippe Cogneau, Valeriy Zakamulin
- "Block Bootstrap Methods and the Choice of Stocks for the Long Run"
- <https://papers.ssrn.com/sol3/papers.cfm?abstract_id=1806447>
- 2011

### 4

- Efron
- "Bootstrap Methods: Another Look at the Jackknife."
- <https://projecteuclid.org/journals/annals-of-statistics/volume-7/issue-1/Bootstrap-Methods-Another-Look-at-the-Jackknife/10.1214/aos/1176344552.full>
