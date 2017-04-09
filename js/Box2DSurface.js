/**
 * Created by franklinhc on 9/24/15.
 */

function Surface () {
    this.myAxes=[];

//links unten
    var sx = 11;
    var sy = -16;
    //rechte wand mit mehreren Kreisen oben dran, incl 2 kurven
    this.myAxes.push(new Box2DBoxEdge ( 17+sx, 512+sy, 38+sx, 542+sy));
    this.myAxes.push(new Box2DBoxEdge ( 38+sx, 542+sy, 40+sx, 561+sy));
    this.myAxes.push(new Box2DBoxEdge ( 40+sx, 561+sy, 48+sx, 584+sy));
    this.myAxes.push(new Box2DBoxEdge ( 48+sx, 584+sy, 62+sx, 607+sy));
    this.myAxes.push(new Box2DBoxEdge ( 62+sx, 607+sy, 79+sx, 625+sy));
    this.myAxes.push(new Box2DBoxEdge ( 79+sx, 625+sy, 98+sx, 639+sy));
    this.myAxes.push(new Box2DBoxEdge ( 98+sx, 639+sy, 124+sx, 655+sy));
    this.myAxes.push(new Box2DBoxEdge ( 124+sx, 655+sy, 162+sx, 669+sy));
    this.myAxes.push(new Box2DBoxEdge ( 162+sx, 669+sy, 175+sx, 682+sy));
    this.myAxes.push(new Box2DBoxEdge ( 175+sx, 682+sy, 194+sx, 691+sy));
    this.myAxes.push(new Box2DBoxEdge ( 194+sx, 691+sy, 217+sx, 691+sy));
    this.myAxes.push(new Box2DBoxEdge ( 217+sx, 691+sy, 239+sx, 681+sy));
    this.myAxes.push(new Box2DBoxEdge ( 239+sx, 681+sy, 250+sx, 666+sy));
    this.myAxes.push(new Box2DBoxEdge ( 250+sx, 666+sy, 254+sx, 652+sy));
    this.myAxes.push(new Box2DBoxEdge ( 254+sx, 652+sy, 270+sx, 659+sy));
    this.myAxes.push(new Box2DBoxEdge ( 270+sx, 659+sy, 294+sx, 661+sy));
    //this.myAxes.push(new Box2DBoxEdge ( 294+sx, 661+sy, 333+sx, 698+sy));

    //linke zwei Halbkreise der Bobbels
    this.myAxes.push(new Box2DBoxEdge ( 350+sx, 549+sy, 334+sx, 560+sy));
    this.myAxes.push(new Box2DBoxEdge ( 334+sx, 560+sy, 321+sx, 547+sy));
    this.myAxes.push(new Box2DBoxEdge ( 321+sx, 547+sy, 304+sx, 539+sy));
    this.myAxes.push(new Box2DBoxEdge ( 304+sx, 539+sy, 282+sx, 536+sy));
    this.myAxes.push(new Box2DBoxEdge ( 282+sx, 536+sy, 281+sx, 518+sy));
    this.myAxes.push(new Box2DBoxEdge ( 281+sx, 518+sy, 274+sx, 501+sy));
    this.myAxes.push(new Box2DBoxEdge ( 274+sx, 501+sy, 262+sx, 489+sy));
    this.myAxes.push(new Box2DBoxEdge ( 262+sx, 489+sy, 244+sx, 480+sy));
    this.myAxes.push(new Box2DBoxEdge ( 244+sx, 480+sy, 223+sx, 480+sy));
    this.myAxes.push(new Box2DBoxEdge ( 223+sx, 480+sy, 207+sx, 457+sy));

    //mittlerer unterer Teil der Bobbels
    this.myAxes.push(new Box2DBoxEdge ( 165+sx, 516+sy, 186+sx, 540+sy));
    this.myAxes.push(new Box2DBoxEdge ( 186+sx, 540+sy, 192+sx, 557+sy));
    this.myAxes.push(new Box2DBoxEdge ( 192+sx, 557+sy, 208+sx, 571+sy));
    this.myAxes.push(new Box2DBoxEdge ( 208+sx, 571+sy, 228+sx, 578+sy));
    this.myAxes.push(new Box2DBoxEdge ( 228+sx, 578+sy, 224+sx, 594+sy));
    this.myAxes.push(new Box2DBoxEdge ( 224+sx, 594+sy, 204+sx, 592+sy));
    this.myAxes.push(new Box2DBoxEdge ( 204+sx, 592+sy, 183+sx, 598+sy));
    this.myAxes.push(new Box2DBoxEdge ( 183+sx, 598+sy, 168+sx, 609+sy));
    this.myAxes.push(new Box2DBoxEdge ( 168+sx, 609+sy, 159+sx, 624+sy));
    this.myAxes.push(new Box2DBoxEdge ( 159+sx, 624+sy, 140+sx, 618+sy));
    this.myAxes.push(new Box2DBoxEdge ( 140+sx, 618+sy, 123+sx, 609+sy));
    this.myAxes.push(new Box2DBoxEdge ( 123+sx, 609+sy, 111+sx, 600+sy));
    this.myAxes.push(new Box2DBoxEdge ( 111+sx, 600+sy, 94+sx, 582+sy));
    this.myAxes.push(new Box2DBoxEdge ( 94+sx, 582+sy, 84+sx, 565+sy));
    this.myAxes.push(new Box2DBoxEdge ( 84+sx, 565+sy, 79+sx, 541+sy));
    this.myAxes.push(new Box2DBoxEdge ( 79+sx, 541+sy, 63+sx, 510+sy));
    //3D
    this.myAxes.push(new Box2DBoxEdge ( 145+sx, 619+sy, 157+sx, 605+sy));
    this.myAxes.push(new Box2DBoxEdge ( 157+sx, 605+sy, 170+sx, 596+sy));
    this.myAxes.push(new Box2DBoxEdge ( 170+sx, 596+sy, 192+sx, 593+sy));

    this.myAxes.push(new Box2DBoxEdge ( 208+sx, 591+sy, 211+sx, 579+sy));
    this.myAxes.push(new Box2DBoxEdge ( 228+sx, 577+sy, 211+sx, 579+sy));
    this.myAxes.push(new Box2DBoxEdge ( 211+sx, 579+sy, 194+sx, 572+sy));
    this.myAxes.push(new Box2DBoxEdge ( 194+sx, 572+sy, 182+sx, 564+sy));
    this.myAxes.push(new Box2DBoxEdge ( 182+sx, 564+sy, 173+sx, 552+sy));
    this.myAxes.push(new Box2DBoxEdge ( 173+sx, 552+sy, 168+sx, 535+sy));
    this.myAxes.push(new Box2DBoxEdge ( 168+sx, 535+sy, 165+sx, 516+sy));

    this.myAxes.push(new Box2DBoxEdge ( 19+sx, 515+sy, 20+sx, 552+sy));
    this.myAxes.push(new Box2DBoxEdge ( 20+sx, 552+sy, 28+sx, 586+sy));
    this.myAxes.push(new Box2DBoxEdge ( 28+sx, 586+sy, 45+sx, 609+sy));
    this.myAxes.push(new Box2DBoxEdge ( 45+sx, 609+sy, 66+sx, 631+sy));
    this.myAxes.push(new Box2DBoxEdge ( 66+sx, 631+sy, 89+sx, 647+sy));
    this.myAxes.push(new Box2DBoxEdge ( 89+sx, 647+sy, 117+sx, 661+sy));
    this.myAxes.push(new Box2DBoxEdge ( 117+sx, 661+sy, 146+sx, 671+sy));
    this.myAxes.push(new Box2DBoxEdge ( 146+sx, 671+sy, 164+sx, 688+sy));
    this.myAxes.push(new Box2DBoxEdge ( 164+sx, 688+sy, 181+sx, 695+sy));
    this.myAxes.push(new Box2DBoxEdge ( 181+sx, 695+sy, 202+sx, 692+sy));
    // ende "3d" - sind eigentich Schnittpunkt zwischen wand u boden

    /*
     !!! neue Röhren!!!
     !!! WURDE NACH AKTUALISIERUNG DES SPIELFELDS HINZUGEFÜGT!!!
     !!!       BITTE KEIN X ODER Y ADDIEREN      !!!!
     */
    //kleine zusatzwand oben rechts zw bobbel u röhre ins aus
    this.myAxes.push(new Box2DBoxEdge ( 308, 637, 227, 665));
    this.myAxes.push(new Box2DBoxEdge ( 227, 665, 221, 672));

    //Wand zwischen 2 Röhren (Abschuss & aus
    this.myAxes.push(new Box2DBoxEdge (392, 674, 339, 701 ));
    this.myAxes.push(new Box2DBoxEdge (339, 701, 268, 710 ));
    this.myAxes.push(new Box2DBoxEdge ( 268, 710, 140, 694 ));
    this.myAxes.push(new Box2DBoxEdge (  140, 694, 0, 621));

    //wand ganz rechts
    this.myAxes.push(new Box2DBoxEdge (560, 600, 526, 625 ));
    this.myAxes.push(new Box2DBoxEdge (526, 625, 510, 668));
    this.myAxes.push(new Box2DBoxEdge (510, 668, 491, 713));
    this.myAxes.push(new Box2DBoxEdge ( 491, 713, 462, 733));
    this.myAxes.push(new Box2DBoxEdge ( 462, 733, 333, 761));
    this.myAxes.push(new Box2DBoxEdge (333, 761, 174, 760));
    this.myAxes.push(new Box2DBoxEdge ( 174, 760, 102, 749));
    this.myAxes.push(new Box2DBoxEdge (102, 749, 0, 691));
   +
    /*
    NEUE RÖHREN ENDE!!!
     */


//Links oben

    this.myAxes.push(new Box2DBoxEdge ( 17, 768-512, 38, 768-542));
    this.myAxes.push(new Box2DBoxEdge ( 38, 768-542, 40, 768-561));
    this.myAxes.push(new Box2DBoxEdge ( 40, 768-561, 48, 768-584));
    this.myAxes.push(new Box2DBoxEdge ( 48, 768-584, 62, 768-607));
    this.myAxes.push(new Box2DBoxEdge ( 62, 768-607, 79, 768-625));
    this.myAxes.push(new Box2DBoxEdge ( 79, 768-625, 98, 768-639));
    this.myAxes.push(new Box2DBoxEdge ( 98, 768-639, 124, 768-655));
    this.myAxes.push(new Box2DBoxEdge ( 124, 768-655, 162, 768-669));
    this.myAxes.push(new Box2DBoxEdge ( 162, 768-669, 175, 768-682));
    this.myAxes.push(new Box2DBoxEdge ( 175, 768-682, 194, 768-691));
    this.myAxes.push(new Box2DBoxEdge ( 194, 768-691, 217, 768-691));
    this.myAxes.push(new Box2DBoxEdge ( 217, 768-691, 239, 768-681));
    this.myAxes.push(new Box2DBoxEdge ( 239, 768-681, 250, 768-666));
    this.myAxes.push(new Box2DBoxEdge ( 250, 768-666, 254, 768-652));
    this.myAxes.push(new Box2DBoxEdge ( 254, 768-652, 297, 75));

    this.myAxes.push(new Box2DBoxEdge ( 159, 768-624, 140, 768-618));
    this.myAxes.push(new Box2DBoxEdge ( 140, 768-618, 123, 768-609));
    this.myAxes.push(new Box2DBoxEdge ( 123, 768-609, 111, 768-600));
    this.myAxes.push(new Box2DBoxEdge ( 111, 768-600, 94, 768-582));
    this.myAxes.push(new Box2DBoxEdge ( 94, 768-582, 84, 768-565));
    this.myAxes.push(new Box2DBoxEdge ( 84, 768-565, 79, 768-541));
    this.myAxes.push(new Box2DBoxEdge ( 79, 768-541, 63, 768-510));

    this.myAxes.push(new Box2DBoxEdge ( 224, 768-594, 204, 768-592));
    this.myAxes.push(new Box2DBoxEdge ( 204, 768-592, 183, 768-598));
    this.myAxes.push(new Box2DBoxEdge ( 183, 768-598, 168, 768-609));
    this.myAxes.push(new Box2DBoxEdge ( 168, 768-609, 159, 768-624));

    //3D
    this.myAxes.push(new Box2DBoxEdge ( 146, 768-671, 162, 768-669));
    this.myAxes.push(new Box2DBoxEdge ( 19, 768-515, 20, 768-552));
    this.myAxes.push(new Box2DBoxEdge ( 20, 768-552, 28, 768-586));
    this.myAxes.push(new Box2DBoxEdge ( 28, 768-586, 45, 768-609));
    this.myAxes.push(new Box2DBoxEdge ( 45, 768-609, 66, 768-631));
    this.myAxes.push(new Box2DBoxEdge ( 66, 768-631, 89, 768-647));
    this.myAxes.push(new Box2DBoxEdge ( 89, 768-647, 117, 768-661));
    this.myAxes.push(new Box2DBoxEdge ( 117, 768-661, 146, 768-671));
    this.myAxes.push(new Box2DBoxEdge ( 146, 768-671, 164, 768-688));
    this.myAxes.push(new Box2DBoxEdge ( 164, 768-688, 181, 768-695));
    this.myAxes.push(new Box2DBoxEdge ( 181, 768-695, 202, 768-692));

    this.myAxes.push(new Box2DBoxEdge ( 145, 768-619, 157, 768-605));
    this.myAxes.push(new Box2DBoxEdge ( 157, 768-605, 170, 768-596));
    this.myAxes.push(new Box2DBoxEdge ( 170, 768-596, 192, 768-593));



//rechts oben
    this.myAxes.push(new Box2DBoxEdge ( 1024-17, 768-512, 1024-38, 768-542));
    this.myAxes.push(new Box2DBoxEdge ( 1024-38, 768-542, 1024-40, 768-561));
    this.myAxes.push(new Box2DBoxEdge ( 1024-40, 768-561, 1024-48, 768-584));
    this.myAxes.push(new Box2DBoxEdge ( 1024-48, 768-584, 1024-62, 768-607));
    this.myAxes.push(new Box2DBoxEdge ( 1024-62, 768-607, 1024-79, 768-625));
    this.myAxes.push(new Box2DBoxEdge ( 1024-79, 768-625, 1024-98, 768-639));
    this.myAxes.push(new Box2DBoxEdge ( 1024-98, 768-639, 1024-124, 768-655));
    this.myAxes.push(new Box2DBoxEdge ( 1024-124, 768-655, 1024-162, 768-669));
    this.myAxes.push(new Box2DBoxEdge ( 1024-162, 768-669, 1024-175, 768-682));
    this.myAxes.push(new Box2DBoxEdge ( 1024-175, 768-682, 1024-194, 768-691));
    this.myAxes.push(new Box2DBoxEdge ( 1024-194, 768-691, 1024-217, 768-691));
    this.myAxes.push(new Box2DBoxEdge ( 1024-217, 768-691, 1024-239, 768-681));
    this.myAxes.push(new Box2DBoxEdge ( 1024-239, 768-681, 1024-250, 768-666));
    this.myAxes.push(new Box2DBoxEdge ( 1024-250, 768-666, 1024-254, 768-652));
    this.myAxes.push(new Box2DBoxEdge ( 1024-254, 768-652, 1024-270, 768-659));
    this.myAxes.push(new Box2DBoxEdge ( 1024-270, 768-659, 1024-294, 768-661));
    this.myAxes.push(new Box2DBoxEdge ( 1024-294, 768-661, 1024-333, 768-698));


    this.myAxes.push(new Box2DBoxEdge ( 1024-350, 768-549, 1024-334, 768-560));
    this.myAxes.push(new Box2DBoxEdge ( 1024-334, 768-560, 1024-321, 768-547));
    this.myAxes.push(new Box2DBoxEdge ( 1024-321, 768-547, 1024-304, 768-539));
    this.myAxes.push(new Box2DBoxEdge ( 1024-304, 768-539, 1024-282, 768-536));
    this.myAxes.push(new Box2DBoxEdge ( 1024-282, 768-536, 1024-281, 768-518));
    this.myAxes.push(new Box2DBoxEdge ( 1024-281, 768-518, 1024-274, 768-501));
    this.myAxes.push(new Box2DBoxEdge ( 1024-274, 768-501, 1024-262, 768-489));
    this.myAxes.push(new Box2DBoxEdge ( 1024-262, 768-489, 1024-244, 768-480));
    this.myAxes.push(new Box2DBoxEdge ( 1024-244, 768-480, 1024-223, 768-480));
    this.myAxes.push(new Box2DBoxEdge ( 1024-223, 768-480, 1024-207, 768-457));

    this.myAxes.push(new Box2DBoxEdge ( 1024-165, 768-516, 1024-186, 768-540));
    this.myAxes.push(new Box2DBoxEdge ( 1024-186, 768-540, 1024-192, 768-557));
    this.myAxes.push(new Box2DBoxEdge ( 1024-192, 768-557, 1024-208, 768-571));
    this.myAxes.push(new Box2DBoxEdge ( 1024-208, 768-571, 1024-228, 768-578));
    this.myAxes.push(new Box2DBoxEdge ( 1024-228, 768-578, 1024-224, 768-594));
    this.myAxes.push(new Box2DBoxEdge ( 1024-224, 768-594, 1024-204, 768-592));
    this.myAxes.push(new Box2DBoxEdge ( 1024-204, 768-592, 1024-183, 768-598));
    this.myAxes.push(new Box2DBoxEdge ( 1024-183, 768-598, 1024-168, 768-609));
    this.myAxes.push(new Box2DBoxEdge ( 1024-168, 768-609, 1024-159, 768-624));
    this.myAxes.push(new Box2DBoxEdge ( 1024-159, 768-624, 1024-140, 768-618));
    this.myAxes.push(new Box2DBoxEdge ( 1024-140, 768-618, 1024-123, 768-609));
    this.myAxes.push(new Box2DBoxEdge ( 1024-123, 768-609, 1024-111, 768-600));
    this.myAxes.push(new Box2DBoxEdge ( 1024-111, 768-600, 1024-94, 768-582));
    this.myAxes.push(new Box2DBoxEdge ( 1024-94, 768-582, 1024-84, 768-565));
    this.myAxes.push(new Box2DBoxEdge ( 1024-84, 768-565, 1024-79, 768-541));
    this.myAxes.push(new Box2DBoxEdge ( 1024-79, 768-541, 1024-63, 768-510));

    //3D
    this.myAxes.push(new Box2DBoxEdge ( 1024-145, 768-619, 1024-157, 768-605));
    this.myAxes.push(new Box2DBoxEdge ( 1024-157, 768-605, 1024-170, 768-596));
    this.myAxes.push(new Box2DBoxEdge ( 1024-170, 768-596, 1024-192, 768-593));

    this.myAxes.push(new Box2DBoxEdge ( 1024-208, 768-591, 1024-211, 768-579));
    this.myAxes.push(new Box2DBoxEdge ( 1024-228, 768-577, 1024-211, 768-579));
    this.myAxes.push(new Box2DBoxEdge ( 1024-211, 768-579, 1024-194, 768-572));
    this.myAxes.push(new Box2DBoxEdge ( 1024-194, 768-572, 1024-182, 768-564));
    this.myAxes.push(new Box2DBoxEdge ( 1024-182, 768-564, 1024-173, 768-552));
    this.myAxes.push(new Box2DBoxEdge ( 1024-173, 768-552, 1024-168, 768-535));
    this.myAxes.push(new Box2DBoxEdge ( 1024-168, 768-535, 1024-165, 768-516));

    this.myAxes.push(new Box2DBoxEdge ( 1024-19, 768-515, 1024-20, 768-552));
    this.myAxes.push(new Box2DBoxEdge ( 1024-20, 768-552, 1024-28, 768-586));
    this.myAxes.push(new Box2DBoxEdge ( 1024-28, 768-586, 1024-45, 768-609));
    this.myAxes.push(new Box2DBoxEdge ( 1024-45, 768-609, 1024-66, 768-631));
    this.myAxes.push(new Box2DBoxEdge ( 1024-66, 768-631, 1024-89, 768-647));
    this.myAxes.push(new Box2DBoxEdge ( 1024-89, 768-647, 1024-117, 768-661));
    this.myAxes.push(new Box2DBoxEdge ( 1024-117, 768-661, 1024-146, 768-671));
    this.myAxes.push(new Box2DBoxEdge ( 1024-146, 768-671, 1024-164, 768-688));
    this.myAxes.push(new Box2DBoxEdge ( 1024-164, 768-688, 1024-181, 768-695));
    this.myAxes.push(new Box2DBoxEdge ( 1024-181, 768-695, 1024-202, 768-692));

    /*
     !!! neue Röhren!!!
     !!! WURDE NACH AKTUALISIERUNG DES SPIELFELDS HINZUGEFÜGT!!!
     !!!       BITTE KEIN X ODER Y ADDIEREN      !!!!
     */
    //kleine zusatzwand oben rechts zw bobbel u röhre ins aus
    this.myAxes.push(new Box2DBoxEdge ( canvas.width - 308, canvas.height-637, canvas.width -227, 665));
    this.myAxes.push(new Box2DBoxEdge ( canvas.width -227, 665, canvas.width -221, 672));

    //Wand zwischen 2 Röhren (Abschuss & aus
    this.myAxes.push(new Box2DBoxEdge (canvas.width -392, canvas.height-674, canvas.width -339, canvas.height-701 ));
    this.myAxes.push(new Box2DBoxEdge (canvas.width -339, canvas.height -701, canvas.width -268, canvas.height-710 ));
    this.myAxes.push(new Box2DBoxEdge ( canvas.width -268, canvas.height -710, canvas.width -140, canvas.height-694 ));
    this.myAxes.push(new Box2DBoxEdge ( canvas.width - 140, canvas.height -694, canvas.width -0, canvas.height-621));

    //wand ganz rechts
    this.myAxes.push(new Box2DBoxEdge (canvas.width -557, canvas.height-590, canvas.width -535, canvas.height-610 ));
    this.myAxes.push(new Box2DBoxEdge (canvas.width -535, canvas.height-610, canvas.width -514, canvas.height-651));
    this.myAxes.push(new Box2DBoxEdge ( canvas.width -514, canvas.height-651,canvas.width - 509, canvas.height-673));
    this.myAxes.push(new Box2DBoxEdge ( canvas.width - 509, canvas.height-673, canvas.width -495, canvas.height-707));
    this.myAxes.push(new Box2DBoxEdge ( canvas.width -495, canvas.height-707, canvas.width -489, canvas.height-712));
    this.myAxes.push(new Box2DBoxEdge (canvas.width - 489, canvas.height-712, canvas.width -370, canvas.height-757));
    this.myAxes.push(new Box2DBoxEdge ( canvas.width -370, canvas.height-757, canvas.width -267, canvas.height-760));
    this.myAxes.push(new Box2DBoxEdge (canvas.width -267, canvas.height-760, canvas.width -64, canvas.height-736));
    this.myAxes.push(new Box2DBoxEdge (canvas.width - 64, canvas.height-736, canvas.width -0, canvas.height-690));
    /*
     NEUE RÖHREN ENDE!!!
     */


    //rechts unten
    this.myAxes.push(new Box2DBoxEdge ( 1024-17, 512, 1024-38, 542));
    this.myAxes.push(new Box2DBoxEdge ( 1024-38, 542, 1024-40, 561));
    this.myAxes.push(new Box2DBoxEdge ( 1024-40, 561, 1024-48, 584));
    this.myAxes.push(new Box2DBoxEdge ( 1024-48, 584, 1024-62, 607));
    this.myAxes.push(new Box2DBoxEdge ( 1024-62, 607, 1024-79, 625));
    this.myAxes.push(new Box2DBoxEdge ( 1024-79, 625, 1024-98, 639));
    this.myAxes.push(new Box2DBoxEdge ( 1024-98, 639, 1024-124, 655));
    this.myAxes.push(new Box2DBoxEdge ( 1024-124, 655, 1024-162, 669));
    this.myAxes.push(new Box2DBoxEdge ( 1024-162, 669, 1024-175, 682));
    this.myAxes.push(new Box2DBoxEdge ( 1024-175, 682, 1024-194, 691));
    this.myAxes.push(new Box2DBoxEdge ( 1024-194, 691, 1024-217, 691));
    this.myAxes.push(new Box2DBoxEdge ( 1024-217, 691, 1024-239, 681));
    this.myAxes.push(new Box2DBoxEdge ( 1024-239, 681, 1024-250, 666));
    this.myAxes.push(new Box2DBoxEdge ( 1024-250, 666, 1024-254, 652));
    this.myAxes.push(new Box2DBoxEdge ( 1024-254, 652, 1024-297, 768-75));

    this.myAxes.push(new Box2DBoxEdge ( 1024-159, 624, 1024-140, 618));
    this.myAxes.push(new Box2DBoxEdge ( 1024-140, 618, 1024-123, 609));
    this.myAxes.push(new Box2DBoxEdge ( 1024-123, 609, 1024-111, 600));
    this.myAxes.push(new Box2DBoxEdge ( 1024-111, 600, 1024-94, 582));
    this.myAxes.push(new Box2DBoxEdge ( 1024-94, 582, 1024-84, 565));
    this.myAxes.push(new Box2DBoxEdge ( 1024-84, 565, 1024-79, 541));
    this.myAxes.push(new Box2DBoxEdge ( 1024-79, 541, 1024-63, 510));

    this.myAxes.push(new Box2DBoxEdge ( 1024-224, 594, 1024-204, 592));
    this.myAxes.push(new Box2DBoxEdge ( 1024-204, 592, 1024-183, 598));
    this.myAxes.push(new Box2DBoxEdge ( 1024-183, 598, 1024-168, 609));
    this.myAxes.push(new Box2DBoxEdge ( 1024-168, 609, 1024-159, 624));

    //3D
    this.myAxes.push(new Box2DBoxEdge ( 1024-146, 671, 1024-162, 669));
    this.myAxes.push(new Box2DBoxEdge ( 1024-19, 515, 1024-20, 552));
    this.myAxes.push(new Box2DBoxEdge ( 1024-20, 552, 1024-28, 586));
    this.myAxes.push(new Box2DBoxEdge ( 1024-28, 586, 1024-45, 609));
    this.myAxes.push(new Box2DBoxEdge ( 1024-45, 609, 1024-66, 631));
    this.myAxes.push(new Box2DBoxEdge ( 1024-66, 631, 1024-89, 647));
    this.myAxes.push(new Box2DBoxEdge ( 1024-89, 647, 1024-117, 661));
    this.myAxes.push(new Box2DBoxEdge ( 1024-117, 661, 1024-146, 671));
    this.myAxes.push(new Box2DBoxEdge ( 1024-146, 671, 1024-164, 688));
    this.myAxes.push(new Box2DBoxEdge ( 1024-164, 688, 1024-181, 695));
    this.myAxes.push(new Box2DBoxEdge ( 1024-181, 695, 1024-202, 692));

    this.myAxes.push(new Box2DBoxEdge ( 1024-145, 619, 1024-157, 605));
    this.myAxes.push(new Box2DBoxEdge ( 1024-157, 605, 1024-170, 596));
    this.myAxes.push(new Box2DBoxEdge ( 1024-170, 596, 1024-192, 593));

    //Abschuss links unten
    this.myAxes.push(new Box2DBoxEdge (491, 699, 488, 674 ));
    this.myAxes.push(new Box2DBoxEdge (488, 674, 476, 652 ));
    this.myAxes.push(new Box2DBoxEdge (476, 652, 449, 629 ));
    this.myAxes.push(new Box2DBoxEdge (449, 629, 469, 628 ));
    this.myAxes.push(new Box2DBoxEdge (469, 628, 488, 641 ));
    this.myAxes.push(new Box2DBoxEdge (488, 641, 503, 660 ));
    this.myAxes.push(new Box2DBoxEdge (503, 660, 510, 679 ));
    this.myAxes.push(new Box2DBoxEdge (510, 679, 513, 699 ));
    this.myAxes.push(new Box2DBoxEdge (513, 699, 491, 699 ));

    //Abschuss links oben
    this.myAxes.push(new Box2DBoxEdge (491, 768-699, 488, 768-674 ));
    this.myAxes.push(new Box2DBoxEdge (488, 768-674, 476, 768-652 ));
    this.myAxes.push(new Box2DBoxEdge (476, 768-652, 449, 768-629 ));
    this.myAxes.push(new Box2DBoxEdge (449, 768-629, 469, 768-628 ));
    this.myAxes.push(new Box2DBoxEdge (469, 768-628, 488, 768-641 ));
    this.myAxes.push(new Box2DBoxEdge (488, 768-641, 503, 768-660 ));
    this.myAxes.push(new Box2DBoxEdge (503, 768-660, 510, 768-679 ));
    this.myAxes.push(new Box2DBoxEdge (510, 768-679, 513, 768-699 ));
    this.myAxes.push(new Box2DBoxEdge (513, 768-699, 491, 768-699 ));

    //Abschuss rechts unten
    this.myAxes.push(new Box2DBoxEdge (557, 768-700, 562, 768-672 ));
    this.myAxes.push(new Box2DBoxEdge (562, 768-672, 572, 768-655 ));
    this.myAxes.push(new Box2DBoxEdge (572, 768-655, 585, 768-639 ));
    this.myAxes.push(new Box2DBoxEdge (585, 768-639, 600, 768-629 ));
    this.myAxes.push(new Box2DBoxEdge (600, 768-629, 622, 768-630 ));
    this.myAxes.push(new Box2DBoxEdge (622, 768-630, 596, 768-650 ));
    this.myAxes.push(new Box2DBoxEdge (596, 768-650, 587, 768-665 ));
    this.myAxes.push(new Box2DBoxEdge (587, 768-665, 581, 768-691 ));
    this.myAxes.push(new Box2DBoxEdge (581, 768-691, 578, 768-700 ));
    this.myAxes.push(new Box2DBoxEdge (578, 768-700, 557, 768-700 ));

    //Abschuss rechts oben
    this.myAxes.push(new Box2DBoxEdge (557, 700, 562, 672 ));
    this.myAxes.push(new Box2DBoxEdge (562, 672, 572, 655 ));
    this.myAxes.push(new Box2DBoxEdge (572, 655, 585, 639 ));
    this.myAxes.push(new Box2DBoxEdge (585, 639, 600, 629 ));
    this.myAxes.push(new Box2DBoxEdge (600, 629, 622, 630 ));
    this.myAxes.push(new Box2DBoxEdge (622, 630, 596, 650 ));
    this.myAxes.push(new Box2DBoxEdge (596, 650, 587, 665 ));
    this.myAxes.push(new Box2DBoxEdge (587, 665, 581, 691 ));
    this.myAxes.push(new Box2DBoxEdge (581, 691, 578, 700 ));
    this.myAxes.push(new Box2DBoxEdge (578, 700, 557, 700 ));

    //Boje groß unten
    this.myAxes.push(new Box2DBoxEdge (612, 483, 624, 469 ));
    this.myAxes.push(new Box2DBoxEdge (624, 469, 643, 464 ));
    this.myAxes.push(new Box2DBoxEdge (643, 464, 662, 477 ));
    this.myAxes.push(new Box2DBoxEdge (662, 477, 665, 500 ));
    this.myAxes.push(new Box2DBoxEdge (665, 500, 645, 519 ));
    this.myAxes.push(new Box2DBoxEdge (645, 519, 620, 513 ));
    this.myAxes.push(new Box2DBoxEdge (620, 513, 612, 497 ));
    this.myAxes.push(new Box2DBoxEdge (612, 497, 612, 483 ));

    //Boje groß oben
    this.myAxes.push(new Box2DBoxEdge (1024-612, 768-483, 1024-624, 768-469 ));
    this.myAxes.push(new Box2DBoxEdge (1024-624, 768-469, 1024-643, 768-464 ));
    this.myAxes.push(new Box2DBoxEdge (1024-643, 768-464, 1024-662, 768-477 ));
    this.myAxes.push(new Box2DBoxEdge (1024-662, 768-477, 1024-665, 768-500 ));
    this.myAxes.push(new Box2DBoxEdge (1024-665, 768-500, 1024-645, 768-519 ));
    this.myAxes.push(new Box2DBoxEdge (1024-645, 768-519, 1024-620, 768-513 ));
    this.myAxes.push(new Box2DBoxEdge (1024-620, 768-513, 1024-612, 768-497 ));
    this.myAxes.push(new Box2DBoxEdge (1024-612, 768-497, 1024-612, 768-483 ));

    //Boje klein unten
    this.myAxes.push(new Box2DBoxEdge (718, 443, 733, 447 ));
    this.myAxes.push(new Box2DBoxEdge (733, 447, 743, 464 ));
    this.myAxes.push(new Box2DBoxEdge (743, 464, 734, 481 ));
    this.myAxes.push(new Box2DBoxEdge (734, 481, 715, 485 ));
    this.myAxes.push(new Box2DBoxEdge (715, 485, 703, 477 ));
    this.myAxes.push(new Box2DBoxEdge (703, 477, 700, 464 ));
    this.myAxes.push(new Box2DBoxEdge (700, 464, 707, 448 ));
    this.myAxes.push(new Box2DBoxEdge (707, 448, 718, 443 ));

    //Boje klein oben
    this.myAxes.push(new Box2DBoxEdge (1024-718, 768-443, 1024-733, 768-447 ));
    this.myAxes.push(new Box2DBoxEdge (1024-733, 768-447, 1024-743, 768-464 ));
    this.myAxes.push(new Box2DBoxEdge (1024-743, 768-464, 1024-734, 768-481 ));
    this.myAxes.push(new Box2DBoxEdge (1024-734, 768-481, 1024-715, 768-485 ));
    this.myAxes.push(new Box2DBoxEdge (1024-715, 768-485, 1024-703, 768-477 ));
    this.myAxes.push(new Box2DBoxEdge (1024-703, 768-477, 1024-700, 768-464 ));
    this.myAxes.push(new Box2DBoxEdge (1024-700, 768-464, 1024-707, 768-448 ));
    this.myAxes.push(new Box2DBoxEdge (1024-707, 768-448, 1024-718, 768-443 ));

    //Boje mini unten
    this.myAxes.push(new Box2DBoxEdge (706, 552, 720, 544 ));
    this.myAxes.push(new Box2DBoxEdge (720, 544, 723, 531 ));
    this.myAxes.push(new Box2DBoxEdge (723, 531, 711, 519 ));
    this.myAxes.push(new Box2DBoxEdge (711, 519, 697, 520 ));
    this.myAxes.push(new Box2DBoxEdge (697, 520, 689, 532 ));
    this.myAxes.push(new Box2DBoxEdge (689, 532, 694, 546 ));
    this.myAxes.push(new Box2DBoxEdge (694, 546, 706, 552 ));

    //Boje mini oben
    this.myAxes.push(new Box2DBoxEdge (1024-706, 768-552, 1024-720, 768-544 ));
    this.myAxes.push(new Box2DBoxEdge (1024-720, 768-544, 1024-723, 768-531 ));
    this.myAxes.push(new Box2DBoxEdge (1024-723, 768-531, 1024-711, 768-519 ));
    this.myAxes.push(new Box2DBoxEdge (1024-711, 768-519, 1024-697, 768-520 ));
    this.myAxes.push(new Box2DBoxEdge (1024-697, 768-520, 1024-689, 768-532 ));
    this.myAxes.push(new Box2DBoxEdge (1024-689, 768-532, 1024-694, 768-546 ));
    this.myAxes.push(new Box2DBoxEdge (1024-694, 768-546, 1024-706, 768-552 ));



    this.draw = function(ctx) {
        for (var i = 0; i < this.myAxes.length; ++i) {
            this.myAxes[i].draw(ctx);
        }
    }; // end draw function
}



function Box2DBoxEdge ( x1,  y1, x2, y2) {
    var screenX1 = x1;
    var screenY1 = y1;
    var screenX2 = x2;
    var screenY2 = y2;

    // changing to box2D coordinates
    var Box2Dx1 = x1/ SCALE;
    var Box2Dy1 = y1/ SCALE;
    var Box2Dx2 = x2/ SCALE;
    var Box2Dy2 = y2/ SCALE;

    var b2FixtureDef = Box2D.Dynamics.b2FixtureDef;
    var b2BodyDef = Box2D.Dynamics.b2BodyDef;
    var b2PolygonShape = Box2D.Collision.Shapes.b2PolygonShape;
    var b2Body = Box2D.Dynamics.b2Body;
    var b2Vec2 = Box2D.Common.Math.b2Vec2;

    this.fixDef = new b2FixtureDef;
    this.fixDef.density = 1.0;
    this.fixDef.friction = 0.5;
    this.fixDef.restitution = 1.0;
    if (x1 > 870 || x2 > 870 || x1 < 140 || x2 < 140){
        this.fixDef.restitution = 0.5;
    }

    this.bodyDef = new b2BodyDef;
    this.bodyDef.type = b2Body.b2_staticBody;
    this.fixDef.shape = new b2PolygonShape;

    var punto1 = new b2Vec2(Box2Dx1, Box2Dy1);
    var punto2 = new b2Vec2(Box2Dx2, Box2Dy2);
    this.fixDef.shape.SetAsEdge(punto1, punto2);

    this.Object = world.CreateBody(this.bodyDef).CreateFixture(this.fixDef);
    //console.log("screenX1 = " + screenX1 + "   screenY1 = " + screenY1);

    this.draw = function(ctx) {
        var alpha = 0.8;
        ctx.save();
        ctx.strokeStyle = "rgba(50, 50, 251, " + alpha + ")";

        ctx.beginPath();
        ctx.moveTo(screenX1, screenY1);
        ctx.lineTo(screenX2 , screenY2);
        ctx.closePath();

        ctx.stroke();
        ctx.restore();
    };
}