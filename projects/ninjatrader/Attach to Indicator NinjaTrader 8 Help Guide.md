---
title: Attach to Indicator - NinjaTrader 8 Help Guide
company: NinjaTrader LLC
Status: Completed
description: One of the major enhancements to NinjaTrader 8 was the ability to attach a live market order to be updated automatically by a 3rd party script (without needing to know how to program). This was a simple operation guide to introduce users to the platform features.
subjects: ["Day trading", "NinjaTrader"]
URL: https://ninjatrader.com/support/helpGuides/nt8/?charttrader_attachtoindicator.htm
PDF: "blank"
canonical_url: false
cover_image: https://mscott.b-cdn.net/images/attach.png
date: 2015-05-28
published: true
domain: ninjatrader.com
tags: ["fintech", "technical-writing"]
---

## Attach to Indicator

Chart Trader provides the ability to attach an order to an indicator plot, automatically moving the order in lockstep with the indicator as its plot value changes. This feature can be used for entries as well as resting exit orders such as Stop Losses and Profit Targets.

## How to attach an order to an indicator

### Attaching an Order to an Indicator

Use the following steps to attach an order to an indicator:

1. Apply at least one indicator to your chart, in the same panel as the Data Series to which you wish to place the order (See the Working with Indicators page for more information).
1. Apply a resting order to the chart (See the Submitting Orders page for more information).
1. .Left mouse click the order label at the left side of the order line.
1. Hold the Ctrl key on your keyboard. You will see a ghost order line matching up with an indicator plot on the chart, with a label that reads "attach."
1. Left mouse click anywhere within the chart while continuing to hold the Ctrl key.
1. .The Attach to Indicator Properties window will appear, in which you can select the specific indicator to which to attach the order (if more than one is applied to the chart).
1. .Change any properties as needed (see the "Attach to Indicator Properties" section below), then click the OK button.

![chart trader](/work/images/charttrader20.png)

In the image above, the Ctrl key is held down on the keyboard after left mouse clicking the order label. The next left mouse click will bring up the Attach to Indicator Properties window, which allows us to attach the order to the SMA plot on the chart.

## Attach to Indicator properties

### Attach to Indicator Properties

The Attach to Indicator Properties window can be accessed in one of two ways. Using the process outlined above to attach an order to an indicator will bring up this window automatically, allowing you to set parameters for the indicator tracking before attaching an order. Alternatively, you can use the process outlined below:

1. Right mouse click the label connected to the order line for an order on the chart

1. Hover your cursor over the order listed in the right click menu that appears

1. Select the Attach to Indicator menu item

1. Select the Properties menu item

The Attach to Indicator Properties window allows you to set the following properties:

![chart trader properties](/work/images/charttrader19.png)

|                                   |                                                                                                                   |
| --------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| **Indicator**                     | Allows the selection of a specific indicator to which to attach an order                                          |
|                                   |
| **Offset**                        | Sets an offset value to allow an order to trail above or below an indicator plot                                  |
|                                   |
| **Modify toward last price only** | Restricts an order to only move towards the last traded price as it follows an indicator plot, never further away |
|                                   |
