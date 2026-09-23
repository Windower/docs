---
permalink: /plugins/binder/
title: Binder
---

Binder is a replacement for the classic G15Binder plugin, with new features, and support for a much wider array of devices.

## Features

When a key is pressed on one of the supported devices below an alias of the form `<device>_<key>` (e.g. `g510_m3g10`) is executed; when the key is released, an alias with the same name but with `_up` appended to the end (e.g. `g510_m3g10_up`) is executed.

Devices can be plugged in or reconnected while the game is running; Binder picks them up automatically.

**Note:** *Unless stated otherwise, you must use a default or blank profile for Final Fantasy XI in the software for your device.*

## Commands

Binder registers the `//binder` command:

| Command | Description |
|:---|:---|
| `//binder list` (or `l`) | Lists every connected device and a compact pattern of the aliases its keys fire. |
| `//binder echo [on\|off]` (or `e`) | Toggles echo mode: each alias is printed to the console as its key is pressed, with a ready-to-copy `//alias` line. Everything is also appended to `binder_echo.log` in your temp folder (the exact path is printed when echo is enabled). |
| `//binder mark <label>` (or `m`) | Writes a labeled separator line into the echo log — useful when recording which physical key produced which alias. |
| `//binder help` (or `h`) | Shows usage. |

The fastest way to set up any device: turn on `//binder echo`, press the key you want to bind, and copy the alias name it prints.

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
| Other modern Logitech gaming devices with G-keys | **lg\<pid\>** | Devices supporting Logitech's HID++ 2.0 protocol are detected automatically, even if not listed here. The prefix is `lg` plus the USB product id in hex (shown in the console at load, and by `//binder list`), e.g. `alias lgc33f_m1g1 input /ja "Provoke" <t>;` |
| [Microsoft Sidewinder X4 Keyboard](http://www.microsoft.com/hardware/en-us/p/sidewinder-x4-keyboard) | **swx4** | `alias swx4_m1s1 input /pet "Wind Blade" <t>;` |
| [Razer BlackWidow Gaming Keyboard](http://www.razerzone.com/gaming-keyboards-keypads/razer-blackwidow-ultimate-2013) | **bw** | `alias bw_m1 input /pet "Snarl" <me>;` |
| Razer BlackWidow Chroma V2 | **bw2** | `alias bw2_m1 input /pet "Snarl" <me>;` |
| [Razer Naga Gaming Mouse](http://store.razerzone.com/store/razerusa/en_US/pd/productID.169418900) | **naga** | `alias naga_1 input /ma "Holy II" <t>;` |
| [Asus Strix Tactic Pro](http://www.asus.com/Gaming/STRIX_TACTIC_PRO/) | **stp** | `alias stp_m3 input /ja "Sneak Attack" <me>;` |
| Logitech ChillStream Controller | **chillstream** | `alias chillstream_a input /ja "Provoke" <t>;`<br> Buttons: `a`, `b`, `x`, `y`, `lb`, `rb`, `back`, `start`, `lstick`, `rstick`. |
| [Elgato Stream Deck](https://www.elgato.com/en/stream-deck) / [MK.2](https://www.elgato.com/en/stream-deck-mk2) | **sd** | `alias sd_1 input /ja "Provoke" <t>`<br> Keys are numbered left-to-right, top-to-bottom. i.e. On a standard 15-key Stream Deck, top left is `sd_1`, top right is `sd_5`, and bottom right is `sd_15`. |
| [Elgato Stream Deck MK.2 (Scissor Keys)](https://www.elgato.com/en/stream-deck-mk2) | **sdscissor** | `alias sdscissor_1 input /ja "Provoke" <t>` |
| [Elgato Stream Deck XL](https://www.elgato.com/en/stream-deck-xl) | **sdxl** | `alias sdxl_1 input /ja "Provoke" <t>`<br> 32 keys, numbered left-to-right, top-to-bottom. |
| [Elgato Stream Deck Mini](https://www.elgato.com/en/stream-deck-mini) / Mini MK.2 | **sdmini** | `alias sdmini_1 input /ja "Provoke" <t>` |
| [Elgato Stream Deck Pedal](https://www.elgato.com/us/en/p/stream-deck-pedal) | **sdpedal** | `alias sdpedal_2 input /ja "Provoke" <t>`<br> can also add `_up` at the end for release. e.g. `sdpedal_1_up` |
| [Elgato Stream Deck Neo](https://www.elgato.com/us/en/p/stream-deck-neo) | **sdneo** | `alias sdneo_1 input /ja "Provoke" <t>`<br> Keys 1-8 are the screen keys; 9 and 10 are the touch arrows. |
| [Elgato Stream Deck +](https://www.elgato.com/us/en/p/stream-deck-plus) | **sdplus** | Keys: `sdplus_1` to `sdplus_8`. Dial presses: `sdplus_dial1` to `sdplus_dial4` (with `_up`). Dial rotation: `sdplus_dial1_cw` / `sdplus_dial1_ccw`. Touch strip: `sdplus_touch1` to `sdplus_touch4` (tap above each dial), `_long` variants, and `sdplus_swipe_left` / `sdplus_swipe_right`. |
| Elgato Stream Deck + XL | **sdplusxl** | As Stream Deck +, with 36 keys and 6 dials. |
| Corsair K95 (original/Vengeance, 18 G-keys) | **k95** | `alias k95_g1 input /ja "Provoke" <t>;`<br> The newer K95 RGB / Platinum models use a different protocol and are not yet supported. |
| [Corsair K55 RGB PRO](https://www.corsair.com/us/en/p/keyboards/ch-9226765-na/k55-rgb-pro-gaming-keyboard-ch-9226765-na) / [PRO XT](https://www.corsair.com/us/en/p/keyboards/ch-9226715-na/k55-rgb-pro-xt-gaming-keyboard-ch-9226715-na) *(experimental)* | **k55** | `alias k55_g1 input /ja "Provoke" <t>;`<br> See the Corsair notes below. |
| [Corsair K100 RGB](https://www.corsair.com/us/en/p/keyboards/ch-912a01a-na/k100-rgb-optical-mechanical-gaming-keyboard-corsair-opx-switch-black-ch-912a01a-na) *(experimental)* | **k100** | `alias k100_g1 input /ja "Provoke" <t>;`<br> See the Corsair notes below. |
| [Corsair Vanguard 96](https://www.corsair.com/us/en/p/keyboards/ch-91e901e-na/vanguard-96-mechanical-gaming-keyboard-corsair-mlx-plasma-ch-91e901e-na) / [96 Pro](https://www.corsair.com/us/en/p/keyboards/ch-91e911g-na/vanguard-pro-96-hall-effect-gaming-keyboard-ch-91e911g-na) / [96 Wireless](https://www.corsair.com/us/en/p/keyboards/ch-91f901e-na/vanguard-96-wireless-mechanical-gaming-keyboard-ch-91f901e-na) | **vg** | `alias vg_g1 input /ja "Provoke" <t>;`<br> G1 through G5 are the side macro buttons. |
| [Corsair Scimitar MMO Mouse (RGB / PRO / ELITE)](https://www.corsair.com/us/en/Categories/Products/Gaming-Mice/MMO-Role-Play-Mice/SCIMITAR-RGB-ELITE-Optical-MOBA-MMO-Gaming-Mouse/p/CH-9304211-NA) | **scim** | `alias scim_1 input /ma "Holy II" <t>;`<br> The 12 side buttons must be on their default mapping (1-0, -, =). |
| CH55x "Mini Keyboard" macro pads | **mini** | `alias mini_f13 input /ja "Provoke" <t>;`<br> Every key the pad sends becomes an alias named after it (`mini_a`, `mini_1`, `mini_f13`, ...) and is swallowed so it types nothing into the game; the same keys on your normal keyboard are unaffected. Tip: program the pad's keys to F13-F24 in its config software for clean, collision-free names. |

## Unlisted devices

Many devices work without being listed above:

- **Media and macro keys** that a device reports through a standard consumer-control collection fire aliases of the form `hid_<vid><pid>_p<page>u<usage>` (e.g. `hid_045e00f9_pcue9`), unique per device model. Gamepad buttons work the same way (e.g. a DualShock 4's buttons are `hid_054c09cc_p9u1` through `p9ue`).
- **Vendor-specific keys** on unlisted gaming hardware fire discovery aliases of the form `hid_<vid><pid>_r<report>b<byte>v<value>`.

In both cases, `//binder echo` shows you the exact alias name to bind — press the key and copy the line. All of these names are derived from the hardware's identity, so they stay valid across reboots and replugs.

## Corsair K55 / K100 notes (experimental)

These keyboards only report their G-keys distinctly after being switched into *software mode* (the same thing iCUE does), which Binder handles automatically. While the plugin is loaded:

- The RGB lighting turns off (nothing is driving it) and the backlight key is inactive. Both return when the game exits. To keep your lighting, run iCUE alongside — Binder coexists with it; just leave the G-keys unassigned in iCUE or a press will trigger both the iCUE action and the Binder alias.
- The G-keys stop typing `1`-`6` (their hardware-mode default) and fire `k55_g1`-`k55_g6` / `k100_g1`-`k100_g6` instead.
- If iCUE exits while the game is running, the keyboard returns to hardware mode and the G-keys stop reporting until the plugin is reloaded or the keyboard is replugged.

The Vanguard keyboards do **not** need any of this — their G-keys report natively and the lighting is unaffected.
