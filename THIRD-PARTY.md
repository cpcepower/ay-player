# Mentions tierces (THIRD-PARTY)

## AY Player original — Megachur (Yoann Courtois)
Original YM/AY player © 2016-2026 Megachur (Yoann Courtois) for www.cpc-power.com — freeware,
noncommercial. L'émulation AY-3-8910 (ay.js), le lecteur YM/AY et le cœur du player sont de
Megachur. Diffusion modifiée : chaque fichier modifié porte un avis « MODIFIED October 2026 »,
conformément aux termes de la licence d'origine (une copie des sources modifiés lui a été
adressée à ycourtois@hotmail.com).

## Format YM / StSound — Arnaud Carré (Leonard)
Le format de dump YM a été créé par **Arnaud Carré (Leonard)** pour son player ST-Sound.
Page de référence du format : http://leonard.oxg.free.fr/ymformat.html
Bibliothèque StSound (GPL) : https://github.com/arnaud-carre/StSound
Seule la lecture du format (YM2!/YM3!/YM3b/YM5!/YM6!, digidrums, archives LZH) est implémentée
ici, à partir de la spécification — aucun code StSound n'est intégré.

## LZH / LHA — Haruhiko Okumura
Le décompresseur LZH (Lzh.js) dérive du code de Haruhiko Okumura, mis dans le domaine public.

## Replayers Amiga / PC — Olav Sørensen (8bitbubsy)
Les replayers de modules sont des portages JavaScript fidèles des replayers C d'Olav Sørensen
(8bitbubsy), licence BSD 3-Clause, aucune musique ni code de démo intégré :
- **st3play** (S3M / Scream Tracker 3, mixage Gravis Ultrasound) : https://github.com/8bitbubsy/st3play
- **ft2play** (XM / FastTracker II) : https://github.com/8bitbubsy/ft2play
- **it2play** (IT / Impulse Tracker 2) : https://github.com/8bitbubsy/it2play

## Émulation OPL — Nuked OPL3 et Opal
- **Nuked OPL3** (opl3.js, LGPL-2.1) par Alexey Khokholov (Nuke.YKT) :
  https://github.com/nukeykt/Nuked-OPL3 — portage respectant la sémantique entière du C.
- **Opal** (opl2.js, domaine public) par « bs }}} » (préservé avec les correctifs OpenMPT),
  émulateur AdLib OPL2 référencé par Radix / Bespin.

## Future Composer — fc14play
Le replayer Future Composer (fc.js) est un portage de la famille fc14play (Grzegorz
Kraszewski / Vincent Gronwald et al., licence MIT), sémantique du replayer Amiga d'origine.

## David Whittaker — NostalgicPlayer
Le décodeur .dw/.dwold (dw.js) est une transcription manuelle du replayer C# de
**NostalgicPlayer** (https://github.com/kode54/NostalgicPlayer) pour les musiques David
Whittaker (Amiga) — transcription de référence comportementale, aucun code intégré.

## ChipNSFX — Cesar Nicolas-Gonzalez (CNGSoft)
Le décodeur .chp (chipn.js) est une transcription fidèle du convertisseur de référence
**chp2ym.c** de Cesar Nicolas-Gonzalez (CNGSoft, tracker GPL-3 / player LGPL), tel que
vendé par yoyofr/modizer.

## Furnace Tracker — référence d'émulation
Le lecteur .fur (fur.js) est une implémentation maison validée octet pour octet contre le
rendu de **Furnace** (tildearrow, GPLv2+) limité aux puces AY-3-8910/YM2149 — aucun code
Furnace intégré.

## ZXTune — référence de transcription
Les sémantiques des formats trackers (STP, PSM, ST3, ST1, PSC, SQT, PT, TS, GTR, FTC, ST128,
tables de fréquences) ont été transcrites à titre de référence comportementale depuis les
sources de ZXTune (vitamin.caig, GPL). Aucun code ZXTune n'est intégré.

## Arkos Tracker — Julien Nevo (Targhan)
Site officiel : https://www.julien-nevo.com/arkostracker/
Les décodeurs AKG (export « AT30 »), AKY (export streamé AT2/AT3) et AKS (chanson source
ZIP+XML) reproduisent le comportement des players officiels d'Arkos Tracker (GPL v3),
transcrits à titre de référence — aucun code du player officiel n'est intégré.
L'export AKM n'est pas encore supporté.

## cpc-power.com
Hébergeur du player original et source des dumps YM ; voir www.cpc-power.com.

## PolyForm Noncommercial 1.0.0
La présente diffusion est sous licence PolyForm Noncommercial 1.0.0 (voir LICENSE) :
https://polyformproject.org/licenses/noncommercial/1.0.0
