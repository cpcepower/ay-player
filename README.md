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
| Dumps YM (StSound, format d'Arnaud Carré) | YM2!, YM3!, YM3b, YM5!, YM6! (+ digidrums, intercalés ou non, compressés LZH ou non) |
| Dumps de registres | PSG / EPSG (Atari ST / ZX), AYC (Amstrad CPC), VTX `ym` et `ay`, MYM (Oric Atmos) |
| VGM | VGM / VGZ avec puce YM2149 / AY-3-8910 |
| Trackers ZX / CPC | AKG (Arkos Tracker 3), AKY (Arkos Tracker 2/3 export streamé), AKS (chanson source Arkos Tracker), PT3/PT2/PT1 (Pro Tracker / Vortex Tracker), ASC Sound Master, STC/ST1/ST3 (Sound Tracker), ST128/ST1X/ST2 (Soundtrakker), STP (Sound Tracker Pro), PSM (Pro Sound Maker), PSC (Pro Sound Creator), SQT (SQ-Tracker), SKS (STarKos), GTR (Global Tracker), FTC (Fast Tracker ZX), CHP (ChipNSFX), FUR (Furnace Tracker), TS (TurboSound, 2 puces) |
| Trackers Amiga / PC | MOD (Amiga ProTracker), FC (Future Composer 1.0-1.4), S3M (Scream Tracker 3, GUS + OPL2/OPL3), XM (FastTracker II), IT (Impulse Tracker), DW (David Whittaker .dw/.dwold) |
| MIDI | SMF (.mid) avec rendu au choix : puce AY, OPL2/OPL3 (AdLib) ou banque SF2 (SoundFont 2 locale) |
| Audio simple | MP3, WAV, OGG/OGA, FLAC (décodés par le navigateur) |

Fonctions : playlist, visualiseur d'ondes par canal A/B/C avec **piste du pattern** (pour les
trackers ET pour tous les dumps AY/YM — YM, PSG, VTX, AYC, VGM, MYM, MIDI), vue des registres
AY, choix de la puce (AY-3-8910 / YM2149) et de l'horloge, coupure A/B/C, disposition stéréo
ABC/ACB, mode compact, thèmes, zoom, interface FR/EN/ES/DE/IT.

## Crédits et licence

- Player YM/AY original © 2016-2026 **Megachur (Yoann Courtois)** pour www.cpc-power.com —
  freeware non commercial. Chaque fichier modifié conserve son avis « MODIFIED October 2026 ».
- Format YM / StSound créé par **Arnaud Carré (Leonard)** :
  http://leonard.oxg.free.fr/ymformat.html
- Décompression LZH : Haruhiko Okumura (domaine public).
- Sémantiques des formats trackers transcrites depuis les sources ZXTune (GPL) et le player
  AKG d'Arkos Tracker 3 (GPL v3) — à titre de référence, aucun code intégré.
- Diffusion modifiée sous licence **PolyForm Noncommercial 1.0.0** — voir [LICENSE](./LICENSE)
  et [THIRD-PARTY.md](./THIRD-PARTY.md). Historique complet : [CHANGELOG.md](./CHANGELOG.md).
