# AY Player — lecteur de musiques YM/AY (HTML5, un seul fichier)

Lecteur de musiques rétro Atari ST / Amstrad CPC / ZX Spectrum fonctionnant dans n'importe quel
navigateur moderne, sans installation. Il est basé sur l'émulation AY-3-8910 / YM2149 du player
original de **Megachur (Yoann Courtois)** pour [www.cpc-power.com](https://www.cpc-power.com),
avec son accord, et modernisé (Web Audio, AudioWorklet, PWA).

## Utilisation

**Hors ligne, sans installation** : téléchargez [`index.html`](./index.html) (ou le ZIP de la
[release](https://github.com/cpcepower/ay-player/releases)) et ouvrez-le d'un double-clic.
Tout est dans ce seul fichier : aucun autre téléchargement, aucune connexion requise.

**En ligne** : https://cpcepower.github.io/ay-player/

**Installation PWA (Android / Chrome / Edge)** : ouvrez la version en ligne puis
« Ajouter à l'écran d'accueil ». L'application s'installe avec son icône, en fenêtre dédiée,
et fonctionne ensuite intégralement hors ligne (service worker).

## Formats supportés

| Famille | Formats |
|---|---|
| Dumps YM (StSound) | YM1!, YM2!, YM3!, YM3b!, YM5!, YM6! (lzh / non compressé), intercalés ou non |
| Dumps de registres | PSG (Atari ST / ZX), AYC (Amstrad CPC), VTX `ym` et `ay` |
| VGM | VGM avec puce YM2149 / AY-3-8910 |
| Trackers ZX / CPC compilés | PT3/PT2 (Pro Tracker), ASC Sound Master, STP (Sound Tracker Pro), ST3 (Sound Tracker v3), PSM (Pro Sound Maker), PSC (Pro Sound Creator), SQT (SQ-Tracker), ST1 (Sound Tracker v1 non compilé), TurboSound (2 puces) |
| Compression | LZH (arcs LHA des dumps YM) |

Fonctions : playlist, visualiseur d'ondes par canal, vue des registres AY, choix de la puce
(AY-3-8910 / YM2149) et de l'horloge, coupure A/B/C, disposition stéréo ABC/ACB, mode compact,
thèmes, zoom, interface FR/EN/ES.

## Crédits et licence

- Player YM/AY original © 2016-2026 **Megachur (Yoann Courtois)** pour www.cpc-power.com —
  freeware non commercial. Chaque fichier modifié conserve son avis « MODIFIED October 2026 ».
- Décompression LZH : Haruhiko Okumura (domaine public).
- Sémantiques des formats trackers transcrites depuis les sources ZXTune (GPL, référence).
- Diffusion modifiée sous licence **PolyForm Noncommercial 1.0.0** — voir [LICENSE](./LICENSE)
  et [THIRD-PARTY.md](./THIRD-PARTY.md). Historique complet : [CHANGELOG.md](./CHANGELOG.md).
