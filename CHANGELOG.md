lot 202610.64.0 — decodeur AKY (Arkos Tracker 2/3 streamed export)

- NOUVEAU format : AKY, l'export "streamed" d'Arkos Tracker 2 v1.0 / 3 v1.1 — header
  (version+endianness, canaux 1-3, frequence PSG 32 bits), linker (duree + 3 offsets de
  track, boucle), tracks (duree + offset de bloc, 3 octets, duree 0 = 256), RegisterBlocks
  a etats initiaux puis differences (NSH/SO/HO/SAH, loop tags internes). Pre-rendu 14
  registres @ 50 Hz, R7 reconstruit chaque frame, R13 ecrit sur changement/retrig
  (0xff = pas d'ecriture), intro + boucle x2. Gate structurel strict (version 0..7,
  marche linker complete, cibles dans les donnees).
- Aucun code Arkos integre : implementation JS originale des semantiques publiees (doc
  AKY.md du port ST de GGN + PlayerAky Stabilized Z80), meme methode que AKG.
- Validation : 6 oracles binaires (interleave_this, just_add_cream, knightmare, m,
  ten_little_endians, you_never_can_tell) — 37/37 (invariants registres, frames
  manuelles croisees sur l'annotation, gates negatifs, dispatch kernel).
- UI : libelle du format x3 langues, mention dans l'aide x3, .aky dans le picker.
- Service worker : cache ay-player-202610.64.0. Version affichee 202610.64.0.

---

lot 202610.63.1 — barre de progression style VLC

- Barre de progression : piste horizontale FINE (10 px) grise et arrondie, remplissage en
  degradé vert clair -> fonce (#6ee7a0 -> #2f9e63), petit ovale ORANGE a contour blanc
  (poignee) a la fin du remplissage, valeur en pourcentage a DROITE de la barre (couleur
  du theme, lisible en clair et en sombre, sur tous les skins).
- La poignee suit la lecture (repliee entre 1 et 99 % pour ne jamais sortir de la piste).
- Le clic sur la barre pour se deplacer dans le morceau est INCANGE (fichiers simples et
  musique a puce).
- Service worker : cache ay-player-202610.63.1 (un rechargement reseau force une fois).

lot 202610.63.0 — volume sur l audio simple + volume persiste

- Volume : le reglage suit maintenant AUSSI les fichiers audio simples (WAV, MP3, OGG, OGA,
  FLAC) — il ne pilotait que le moteur AY/YM. Une unique fonction applyVolume() route le
  niveau vers les deux sorties (graphe Web Audio du chip + element <audio> du fichier simple).
- Volume : le niveau est persiste (localStorage ayplayer.volume) et restaure au demarrage
  (l ancien reglage force a 1.0 disparait). Valeur aberrante stockee -> repli propre sur 1.0.
- Un chargement de fichier simple prend le niveau courant du slider des la premiere lecture.
- Service worker : cache ay-player-202610.63.0 (un rechargement reseau force une fois).

# Changelog AY Player

Historique complet, unifié et simplifié du player. Les versions techniques intermédiaires
(202610.x) sont regroupées par thème ; l'historique détaillé lot par lot reste archivé.

## 202610.62.1 — Allègement du build public

- Le `index.html` public est allégé de 38 % (702 → 436 Ko) : les commentaires
  d'historique et de design sont supprimés du build tout-en-un ; seuls les avis de
  licence obligatoires (Megachur, « MODIFIED October 2026 », Okumura) et l'en-tête de
  release sont conservés. Aucun changement fonctionnel — le code est identique.
- Cache du service worker renommé `ay-player-202610.62.1` (unique rechargement réseau).

## 202610.62.0 — Première release publique (cpcepower/ay-player)

- **Build tout-en-un public** : `index.html` unique contenant tout le player (18 scripts +
  CSS inlinés, octet pour octet identiques aux sources), utilisable en double-clic `file://`
  comme en ligne (GitHub Pages).
- **PWA complète sans fichier binaire** : les icônes 192/512 sont embarquées en data-URI
  dans `ay_player_manifest.json` ; le service worker simplifié précache la page unique.
- **Changelog unique** : les bannières d'historique empilées en tête de chaque fichier et
  le commentaire-changelog géant du HTML sont remplacés par un en-tête court pointant ici.
  Les avis de licence « MODIFIED October 2026 » et les blocs Megachur sont conservés.
- **Licence** : diffusion sous PolyForm Noncommercial 1.0.0, avec THIRD-PARTY.md
  (Megachur, Arnaud Carré/StSound, Okumura/LZH, Arkos Tracker 3, ZXTune, cpc-power).
- État technique = lot 202610.61.18 (voir ci-dessous), rendu sonore validé à l'oreille.

## 202610.53 – 202610.61 — Fidélité matérielle et interface (condensé)

- **Chips hardware-accurates (57.0)** : `ay.js` (AY-3-8910) et `ym2149.js` (YM2149 @ 2 MHz,
  DAC 5 bits) validés contre MAME et le datasheet GI ; plus retouchés ensuite.
- **Fix enveloppes hard (61.0–61.3)** : les enveloppes YM se déclenchent et se relancent
  comme sur le vrai chip (regression introduite par les chips corrigée).
- **Puce proposée par le fichier (59.0, 61.14)** : un dump YM5!/YM6! à 1 MHz propose AY-3-8910
  (CPC) ou 1.7734 MHz → AY (ZX), 2 MHz → YM2149 (Atari ST) ; choix manuel possible (Auto par défaut).
- **Replay d'état R13 (61.17–61.18)** : dans un dump YM, R13 n'est appliqué que si sa valeur
  change — corrige des silences (« 3D Stunt Rider ») et une basse hachée (« 3DManiaks 2 »),
  prouvé par oracle audio sur les dumps réels.
- **Coupure A/B/C (61.16)** : keycaps de mute par canal (panneaux Registres AY et Ondes),
  au niveau matrice, persistées.
- **Interface** : entête Workbench une ligne, credits sous le titre, mode compact complet,
  zoom 50–200 %, panneaux réordonnables (drag ou Alt+flèches), disposition stéréo ABC/ACB,
  skin Winamp/VLC, aide integrée, i18n FR/EN/ES.
- **Wave viewer rework (60.0)** : rafraîchissement requestAnimationFrame, couche statique
  hors écran, tables de bruit pré-générées.

## 202610.14 – 202610.52 — Modernisation Web Audio + formats trackers

- **Web Audio / AudioWorklet (14–15, 49)** : migration depuis le player original, mixage
  44,1 kHz, worklet dual-mode (blob `file://` compatible) + repli ScriptProcessor.
- **Éclatement en fichiers (36–41)** : le monolithe devient un noyau + un décodeur par
  famille ; UI et skins extraits du HTML (ui.js, theme.css).
- **Nouveaux formats** : VGM (27/36), PSG/AYC/VTX (36), ASC Sound Master (2026276.8 → 36),
  Arkos AKG (30/36), STP + PSM (44), ST3 (48), Pro Tracker PT1/PT2 (49/2026276.28), TurboSound
  (49), ST1 (50), PSC (51), SQT (52).
- **PWA (42–43)** : manifest, service worker, fenêtre standalone auto-fit.
- **Mode compact et thèmes (43–47)** : barre compacte, sélecteur de thème Amstrad/Atari/ZX…,
  skin Winamp/VLC (52).

## 2026276.6 – 2026276.13 — Ère « jour de l'année » (pré-versionnement AAAAMM)

- Lecteur YM local : LZH, boucle YM3b corrigée, playlist, visualiseurs, registres AY,
  choix de puce, i18n, skins — fondations du player actuel.

## Avant 2026276 — Player original Megachur

- Player YM/AY en ligne de www.cpc-power.com, émulation AY-3-8910 (ay.js), lecture StSound,
  décompression LZH — © 2016 Megachur (Yoann Courtois), freeware non commercial.
