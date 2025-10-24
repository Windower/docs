---
permalink: /plugins/binder/
title: Binder
---

Binder is a replacement for the classic G15Binder plugin, with new features, and support for a much wider array of devices.

## Features

When a key is pressed on one of the supported devices below an alias of the form `<device>_<key>` (e.g. `g510_m3g10`) is executed; when the key is released, an alias with the same name but with `_up` appended to the end (e.g. `g510_m3g10_up`) is executed.

**Note:** *Unless stated otherwise, you must use a default or blank profile for Final Fantasy XI in the software for your device.*

## Supported Devices

| Device | Prefix | Example |
|:---|:---|:---|
| [Logitech G11 Gaming Keyboard](http://www.logitech.com/en-us/support/keyboards/285) | **g11** | `alias g11_m1g1 input /ma "Cure" <me>;` |
| [Logitech G13 Advanced Gameboard](http://www.logitech.com/en-us/keyboards/keyboards/g13-advanced-gameboard) | **g13** | `alias g13_m1g1 input /ma "Thunder V" <t>;` |
| [Logitech G15 Gaming Keyboard](http://www.logitech.com/en-us/411/180) | **g15** | `alias g15_m1g1 input /ws "Chant du Cygne" <t>;` |
| [Logitech G15 Gaming Keyboard (Version 2)](http://www.logitech.com/en-us/411/3498) | **g15v2** | `alias g15v2_m1g1 input /nin "Utsusemi: Ni" <me>;` |
| [Logitech G19 Gaming Keyboard](http://www.logitech.com/en-us/gaming/mice-keyboard-combos/g19-keyboard-for-gaming) | **g19** | `alias g19_m1g1 input /ma "Sudden Lunge" <t>;` |
| [Logitech G110 Gaming Keyboard](http://www.logitech.com/en-us/gaming/mice-keyboard-combos/gaming-keyboard-g110) | **g110** | `alias g110_m1g1 input /so "Mage's Ballad III" <me>;` |
| [Logitech G510 Gaming Keyboard](http://www.logitech.com/en-us/gaming/mice-keyboard-combos/gaming-keyboard-g510) | **g510** | `alias g510_m1g1 input /ja "Provoke" <t>;` |
| [Logitech G600 Gaming Mouse](https://www.logitechg.com/en-us/products/gaming-mice/g600-mmo-gaming-mouse.html) | **g600** | `alias g600_m1g1 input /ma "Carbuncle" <me>;` |
| [Logitech G700 Gaming Mouse](http://www.logitech.com/en-us/gaming/mice-keyboard-combos/wireless-gaming-mouse-g700) | **g700** | `alias g700_g4 input /ma "Carbuncle" <me>;`<br> *In order to function correctly G4 through G11 must be mapped to Numpad 1 through 8 in SetPoint.* |
| [Microsoft Sidewinder X4 Keyboard](http://www.microsoft.com/hardware/en-us/p/sidewinder-x4-keyboard) | **swx4** | `alias swx4_m1s1 input /pet "Wind Blade" <t>;` |
| [Razer BlackWidow Gaming Keyboard](http://www.razerzone.com/gaming-keyboards-keypads/razer-blackwidow-ultimate-2013) | **bw** | `alias bw_m1 input /pet "Snarl" <me>;`  |
| [Razer Naga Gaming Mouse](http://store.razerzone.com/store/razerusa/en_US/pd/productID.169418900) | **naga** | `alias naga_1 input /ma "Holy II" <t>;` |
| [Asus Strix Tactic Pro](http://www.asus.com/Gaming/STRIX_TACTIC_PRO/) | **stp** | `alias stp_m3 input /ja "Sneak Attack" <me>;` |
| [Elgato Stream Deck](https://www.elgato.com/en/stream-deck) / [MK.2](https://www.elgato.com/en/stream-deck-mk2)| **sd** | `alias sd_1 input /ja "Provoke" <t>`<br> Keys are numbered left-to-right, top-to-bottom. i.e. On a standard 15-key Stream Deck, top left is `sd_1`, top right is `sd_5`, and bottom right is `sd_15`. |
| [Elgato Stream Deck XL](https://www.elgato.com/en/stream-deck-xl) | **sdxl** | `alias sdxl_1 input /ja "Provoke" <t>`<br> Keys are numbered left-to-right, top-to-bottom. i.e. On the Stream Deck XL, top left is `sdxl_1`, top right is `sdxl_8`, and bottom right is `sdxl_32`. |
| [Elgato Stream Deck Mini](https://www.elgato.com/en/stream-deck-mini) | **sdmini** | `alias sdmini_1 input /ja "Provoke" <t>`<br> Keys are numbered left-to-right, top-to-bottom. i.e. On the Stream Deck Mini, top left is `sdmini_1`, top right is `sdmini_3`, and bottom right is `sdmini_6`. |
| [Elgato Stream Deck Pedal](https://www.elgato.com/us/en/p/stream-deck-pedal) | **sdpedal** | `alias sdpedal_2 input /ja "Provoke" <t>`<br> can also add `_up` at the end for release. e.g. `sdpedal_1_up`  |
| Corsair K95 (old model?) | **k95** | `alias k95_1 input /ja "Provoke" <t>;`<br> Dunno if this works on newer models that have fewer G-keys. |
