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
    this.myAxes.push(new Box2DBoxEdge ( 313, 646, 292, 667));
    this.myAxes.push(new Box2DBoxEdge ( 292, 667, 265, 677));

    //Wand zwischen 2 Röhren (Abschuss & aus
    this.myAxes.push(new Box2DBoxEdge (418, 683, 372, 698 ));
    this.myAxes.push(new Box2DBoxEdge ( 372, 698, 332, 712 ));
    this.myAxes.push(new Box2DBoxEdge (332, 712 , 238, 715 ));
    //this.myAxes.push(new Box2DBoxEdge ( 228, 717, 238, 715 ));
    this.myAxes.push(new Box2DBoxEdge ( 238, 715, 148, 703));
    this.myAxes.push(new Box2DBoxEdge (  148, 703, 79, 673));
    this.myAxes.push(new Box2DBoxEdge (   79, 673, 26, 628));
    this.myAxes.push(new Box2DBoxEdge (  26, 628, 0, 628));
    //graue Wand dazu:
    this.myAxes.push(new Box2DBoxEdge ( 0, 628, 38, 657));
    this.myAxes.push(new Box2DBoxEdge ( 38, 657, 66, 673));
    this.myAxes.push(new Box2DBoxEdge ( 66, 673, 149, 703));

    /*wand ganz rechts alt
    this.myAxes.push(new Box2DBoxEdge (560, 600, 534, 625 ));
    this.myAxes.push(new Box2DBoxEdge ( 534, 625 ,523, 644 ));
    this.myAxes.push(new Box2DBoxEdge ( 523, 644, 516, 660 ));
    this.myAxes.push(new Box2DBoxEdge (516, 660, 511, 684 ));
    this.myAxes.push(new Box2DBoxEdge ( 511, 684, 511, 692 ));
    this.myAxes.push(new Box2DBoxEdge ( 511, 692, 499, 716 ));
    this.myAxes.push(new Box2DBoxEdge ( 499, 716, 455, 746 ));
    this.myAxes.push(new Box2DBoxEdge ( 458, 744, 102, 741 ));

    this.myAxes.push(new Box2DBoxEdge (  455, 746, 406, 760 ));
    this.myAxes.push(new Box2DBoxEdge (  406, 760, 345, 766));
    this.myAxes.push(new Box2DBoxEdge (   345, 766, 188, 766));
    this.myAxes.push(new Box2DBoxEdge (  188, 766, 102, 741));
    this.myAxes.push(new Box2DBoxEdge (  143, 748, 43, 738));
    this.myAxes.push(new Box2DBoxEdge (  43, 738, 43, 661));
    this.myAxes.push(new Box2DBoxEdge (  43, 696, 0, 697));
    this.myAxes.push(new Box2DBoxEdge (  43, 696,230, 712));
    //this.myAxes.push(new Box2DBoxEdge (  43, 697, 0, 670));
    */

    //wand ganz rechts alt
    this.myAxes.push(new Box2DBoxEdge (560, 600, 534, 625 ));
    this.myAxes.push(new Box2DBoxEdge ( 534, 625 ,523, 644 ));
    this.myAxes.push(new Box2DBoxEdge ( 523, 644, 516, 660 ));
    this.myAxes.push(new Box2DBoxEdge (516, 660, 511, 684 ));
    this.myAxes.push(new Box2DBoxEdge ( 511, 684, 511, 692 ));
    this.myAxes.push(new Box2DBoxEdge ( 511, 692, 499, 716 ));
    this.myAxes.push(new Box2DBoxEdge ( 499, 716, 484, 731 ));
    this.myAxes.push(new Box2DBoxEdge ( 484, 731, 455, 746 ));
    this.myAxes.push(new Box2DBoxEdge (  455, 746, 406, 760 ));
    this.myAxes.push(new Box2DBoxEdge (  406, 760, 345, 766));
    this.myAxes.push(new Box2DBoxEdge (   345, 766, 188, 766));
    this.myAxes.push(new Box2DBoxEdge (  188, 766, 102, 741));
    this.myAxes.push(new Box2DBoxEdge (  102, 741, 43, 697));
    this.myAxes.push(new Box2DBoxEdge (  43, 697, 43, 661));
    this.myAxes.push(new Box2DBoxEdge (  43, 697, 0, 697));
    //this.myAxes.push(new Box2DBoxEdge (  43, 697, 0, 670));



    /*
    NEUE RÖHREN ENDE!!!
     */


//Links oben

    this.myAxes.push(new Box2DBoxEdge ( 17+14, 768-512+10, 38+14, 768-542+10));
    this.myAxes.push(new Box2DBoxEdge ( 38+14, 768-542+10, 40+14, 768-561+10));
    this.myAxes.push(new Box2DBoxEdge ( 40+14, 768-561+10, 48+14, 768-584+10));
    this.myAxes.push(new Box2DBoxEdge ( 48+14, 768-584+10, 62+14, 768-607+10));
    this.myAxes.push(new Box2DBoxEdge ( 62+14, 768-607+10, 79+14, 768-625+10));
    this.myAxes.push(new Box2DBoxEdge ( 79+14, 768-625+10, 98+14, 768-639+10));
    this.myAxes.push(new Box2DBoxEdge ( 98+14, 768-639+10, 124+14, 768-655+10));
    this.myAxes.push(new Box2DBoxEdge ( 124+14, 768-655+10, 162+14, 768-669+10));
    this.myAxes.push(new Box2DBoxEdge ( 162+14, 768-669+10, 175+14, 768-682+10));
    this.myAxes.push(new Box2DBoxEdge ( 175+14, 768-682+10, 194+14, 768-691+10));
    this.myAxes.push(new Box2DBoxEdge ( 194+14, 768-691+10, 217+14, 768-691+10));
    this.myAxes.push(new Box2DBoxEdge ( 217+14, 768-691+10, 239+14, 768-681+10));
    this.myAxes.push(new Box2DBoxEdge ( 239+14, 768-681+10, 250+14, 768-666+10));
    this.myAxes.push(new Box2DBoxEdge ( 250+14, 768-666+10, 254+14, 768-652+10));
    this.myAxes.push(new Box2DBoxEdge ( 254+14, 768-652+10, 297+14, 75+10));

    this.myAxes.push(new Box2DBoxEdge ( 159+14, 768-624+10, 140+14, 768-618+10));
    this.myAxes.push(new Box2DBoxEdge ( 140+14, 768-618+10, 123+14, 768-609+10));
    this.myAxes.push(new Box2DBoxEdge ( 123+14, 768-609+10, 111+14, 768-600+10));
    this.myAxes.push(new Box2DBoxEdge ( 111+14, 768-600+10, 94+14, 768-582+10));
    this.myAxes.push(new Box2DBoxEdge ( 94+14, 768-582+10, 84+14, 768-565+10));
    this.myAxes.push(new Box2DBoxEdge ( 84+14, 768-565+10, 79+14, 768-541+10));
    this.myAxes.push(new Box2DBoxEdge ( 79+14, 768-541+10, 63+14, 768-510+10));

    this.myAxes.push(new Box2DBoxEdge ( 224+14, 768-594+10, 204+14, 768-592+10));
    this.myAxes.push(new Box2DBoxEdge ( 204+14, 768-592+10, 183+14, 768-598+10));
    this.myAxes.push(new Box2DBoxEdge ( 183+14, 768-598+10, 168+14, 768-609+10));
    this.myAxes.push(new Box2DBoxEdge ( 168+14, 768-609+10, 159+14, 768-624+10));

    //3D

    this.myAxes.push(new Box2DBoxEdge ( 145+14, 768-619+10, 157+14, 768-605+10));
    this.myAxes.push(new Box2DBoxEdge ( 157+14, 768-605+10, 170+14, 768-596+10));
    this.myAxes.push(new Box2DBoxEdge ( 170+14, 768-596+10, 192+14, 768-593+10));

    /*
    neue Röhren!!
     */
    //Röhre ins aus - rechte seite
    this.myAxes.push(new Box2DBoxEdge ( 309, 87, 256, 63));
    this.myAxes.push(new Box2DBoxEdge ( 256, 63, 190, 56));
    this.myAxes.push(new Box2DBoxEdge (  190, 56, 153, 57));
    this.myAxes.push(new Box2DBoxEdge ( 153, 57, 102, 69));
    this.myAxes.push(new Box2DBoxEdge ( 102, 69, 48, 94));
    this.myAxes.push(new Box2DBoxEdge ( 48, 94, 0, 137));
//röhre ins aus-linke Seite
    this.myAxes.push(new Box2DBoxEdge (464, 169, 444,169 ));
    this.myAxes.push(new Box2DBoxEdge (444,169, 475, 142 ));
    this.myAxes.push(new Box2DBoxEdge (475, 142, 495, 93 ));
    this.myAxes.push(new Box2DBoxEdge ( 495, 93, 469, 44 ));
    this.myAxes.push(new Box2DBoxEdge ( 469, 44, 407, 15 ));
    this.myAxes.push(new Box2DBoxEdge ( 407, 15, 346, 4 ));
    this.myAxes.push(new Box2DBoxEdge ( 346, 4, 203, 3 ));
    this.myAxes.push(new Box2DBoxEdge ( 203, 3, 129, 15 ));
    this.myAxes.push(new Box2DBoxEdge (129, 15, 29, 69 ));
    this.myAxes.push(new Box2DBoxEdge (29, 69, 0, 69 ));
    //kleines Stück
    this.myAxes.push(new Box2DBoxEdge (444, 30, 400, 35));
    this.myAxes.push(new Box2DBoxEdge ( 400, 35, 361, 55));
    /*
    neue röhren ende!!
     */


//rechts oben
    this.myAxes.push(new Box2DBoxEdge ( 1024-17-12, 768-512+14, 1024-38-12, 768-542+14));
    this.myAxes.push(new Box2DBoxEdge ( 1024-38-12, 768-542+14, 1024-40-12, 768-561+14));
    this.myAxes.push(new Box2DBoxEdge ( 1024-40-12, 768-561+14, 1024-48-12, 768-584+14));
    this.myAxes.push(new Box2DBoxEdge ( 1024-48-12, 768-584+14, 1024-62-12, 768-607+14));
    this.myAxes.push(new Box2DBoxEdge ( 1024-62-12, 768-607+14, 1024-79-12, 768-625+14));
    this.myAxes.push(new Box2DBoxEdge ( 1024-79-12, 768-625+14, 1024-98-12, 768-639+14));
    this.myAxes.push(new Box2DBoxEdge ( 1024-98-12, 768-639+14, 1024-124-12, 768-655+14));
    this.myAxes.push(new Box2DBoxEdge ( 1024-124-12, 768-655+14, 1024-162-12, 768-669+14));
    this.myAxes.push(new Box2DBoxEdge ( 1024-162-12, 768-669+14, 1024-175-12, 768-682+14));
    this.myAxes.push(new Box2DBoxEdge ( 1024-175-12, 768-682+14, 1024-194-12, 768-691+14));
    this.myAxes.push(new Box2DBoxEdge ( 1024-194-12, 768-691+14, 1024-217-12, 768-691+14));
    this.myAxes.push(new Box2DBoxEdge ( 1024-217-12, 768-691+14, 1024-239-12, 768-681+14));
    this.myAxes.push(new Box2DBoxEdge ( 1024-239-12, 768-681+14, 1024-250-12, 768-666+14));
    this.myAxes.push(new Box2DBoxEdge ( 1024-250-12, 768-666+14, 1024-254-12, 768-652+14));
    this.myAxes.push(new Box2DBoxEdge ( 1024-254-12, 768-652+14, 1024-270-12, 768-659+14));
    this.myAxes.push(new Box2DBoxEdge ( 1024-270-12, 768-659+14, 1024-294-12, 768-661+14));



    this.myAxes.push(new Box2DBoxEdge ( 1024-350-12, 768-549+14, 1024-334-12, 768-560+14));
    this.myAxes.push(new Box2DBoxEdge ( 1024-334-12, 768-560+14, 1024-321-12, 768-547+14));
    this.myAxes.push(new Box2DBoxEdge ( 1024-321-12, 768-547+14, 1024-304-12, 768-539+14));
    this.myAxes.push(new Box2DBoxEdge ( 1024-304-12, 768-539+14, 1024-282-12, 768-536+14));
    this.myAxes.push(new Box2DBoxEdge ( 1024-282-12, 768-536+14, 1024-281-12, 768-518+14));
    this.myAxes.push(new Box2DBoxEdge ( 1024-281-12, 768-518+14, 1024-274-12, 768-501+14));
    this.myAxes.push(new Box2DBoxEdge ( 1024-274-12, 768-501+14, 1024-262-12, 768-489+14));
    this.myAxes.push(new Box2DBoxEdge ( 1024-262-12, 768-489+14, 1024-244-12, 768-480+14));
    this.myAxes.push(new Box2DBoxEdge ( 1024-244-12, 768-480+14, 1024-223-12, 768-480+14));
    this.myAxes.push(new Box2DBoxEdge ( 1024-223-12, 768-480+14, 1024-207-12, 768-457+14));

    this.myAxes.push(new Box2DBoxEdge ( 1024-165-12, 768-516+14, 1024-186-12, 768-540+14));
    this.myAxes.push(new Box2DBoxEdge ( 1024-186-12, 768-540+14, 1024-192-12, 768-557+14));
    this.myAxes.push(new Box2DBoxEdge ( 1024-192-12, 768-557+14, 1024-208-12, 768-571+14));
    this.myAxes.push(new Box2DBoxEdge ( 1024-208-12, 768-571+14, 1024-228-12, 768-578+14));
    this.myAxes.push(new Box2DBoxEdge ( 1024-228-12, 768-578+14, 1024-224-12, 768-594+14));
    this.myAxes.push(new Box2DBoxEdge ( 1024-224-12, 768-594+14, 1024-204-12, 768-592+14));
    this.myAxes.push(new Box2DBoxEdge ( 1024-204-12, 768-592+14, 1024-183-12, 768-598+14));
    this.myAxes.push(new Box2DBoxEdge ( 1024-183-12, 768-598+14, 1024-168-12, 768-609+14));
    this.myAxes.push(new Box2DBoxEdge ( 1024-168-12, 768-609+14, 1024-159-12, 768-624+14));
    this.myAxes.push(new Box2DBoxEdge ( 1024-159-12, 768-624+14, 1024-140-12, 768-618+14));
    this.myAxes.push(new Box2DBoxEdge ( 1024-140-12, 768-618+14, 1024-123-12, 768-609+14));
    this.myAxes.push(new Box2DBoxEdge ( 1024-123-12, 768-609+14, 1024-111-12, 768-600+14));
    this.myAxes.push(new Box2DBoxEdge ( 1024-111-12, 768-600+14, 1024-94-12, 768-582+14));
    this.myAxes.push(new Box2DBoxEdge ( 1024-94-12, 768-582+14, 1024-84-12, 768-565+14));
    this.myAxes.push(new Box2DBoxEdge ( 1024-84-12, 768-565+14, 1024-79-12, 768-541+14));
    this.myAxes.push(new Box2DBoxEdge ( 1024-79-12, 768-541+14, 1024-63-12, 768-510+14));

    //3D
    this.myAxes.push(new Box2DBoxEdge ( 1024-145-12, 768-619+14, 1024-157-12, 768-605+14));
    this.myAxes.push(new Box2DBoxEdge ( 1024-157-12, 768-605+14, 1024-170-12, 768-596+14));
    this.myAxes.push(new Box2DBoxEdge ( 1024-170-12, 768-596+14, 1024-192-12, 768-593+14));

    this.myAxes.push(new Box2DBoxEdge ( 1024-208-12, 768-591+14, 1024-211-12, 768-579+14));
    this.myAxes.push(new Box2DBoxEdge ( 1024-228-12, 768-577+14, 1024-211-12, 768-579+14));
    this.myAxes.push(new Box2DBoxEdge ( 1024-211-12, 768-579+14, 1024-194-12, 768-572+14));
    this.myAxes.push(new Box2DBoxEdge ( 1024-194-12, 768-572+14, 1024-182-12, 768-564+14));
    this.myAxes.push(new Box2DBoxEdge ( 1024-182-12, 768-564+14, 1024-173-12, 768-552+14));
    this.myAxes.push(new Box2DBoxEdge ( 1024-173-12, 768-552+14, 1024-168-12, 768-535+14));
    this.myAxes.push(new Box2DBoxEdge ( 1024-168-12, 768-535+14, 1024-165-12, 768-516+14));


    /*
     /*
     !!! neue Röhren!!!
     !!! WURDE NACH AKTUALISIERUNG DES SPIELFELDS HINZUGEFÜGT!!!
     !!!       BITTE KEIN X ODER Y ADDIEREN      !!!!
     */
    //kleine zusatzwand oben rechts zw bobbel u röhre ins aus
    this.myAxes.push(new Box2DBoxEdge ( canvas.width-313, canvas.height-646, canvas.width-292, canvas.height-667));
    this.myAxes.push(new Box2DBoxEdge ( canvas.width-292, canvas.height-667, canvas.width-265, canvas.height-677));

    //Wand zwischen 2 Röhren (Abschuss & aus
    this.myAxes.push(new Box2DBoxEdge (canvas.width-418, canvas.height-683, canvas.width-372, canvas.height-698 ));
    this.myAxes.push(new Box2DBoxEdge ( canvas.width-372, canvas.height-698, canvas.width-332, canvas.height-712 ));
    this.myAxes.push(new Box2DBoxEdge (canvas.width-332, canvas.height-712 ,  canvas.width-238, canvas.height-715));
    //this.myAxes.push(new Box2DBoxEdge ( canvas.width-228, canvas.height-717, canvas.width-238, canvas.height-715 ));
    this.myAxes.push(new Box2DBoxEdge ( canvas.width-238, canvas.height-715, canvas.width-148, canvas.height-703));
    this.myAxes.push(new Box2DBoxEdge (  canvas.width-148, canvas.height-703, canvas.width-79, canvas.height-673));
    this.myAxes.push(new Box2DBoxEdge (   canvas.width-79, canvas.height-673, canvas.width-26, canvas.height-628));
    this.myAxes.push(new Box2DBoxEdge (  canvas.width-26, canvas.height-628, canvas.width-0, canvas.height-628));
    //graue Wand dazu:
    this.myAxes.push(new Box2DBoxEdge ( canvas.width-0, canvas.height-628, canvas.width-38, canvas.height-657));
    this.myAxes.push(new Box2DBoxEdge ( canvas.width-38, canvas.height-657, canvas.width-66, canvas.height-673));
    this.myAxes.push(new Box2DBoxEdge ( canvas.width-66, canvas.height-673, canvas.width-149, canvas.height-703));


    //wand ganz rechts
    this.myAxes.push(new Box2DBoxEdge (canvas.width-560, canvas.height-600, canvas.width-534, canvas.height-625 ));
    this.myAxes.push(new Box2DBoxEdge ( canvas.width-534, canvas.height-625 ,canvas.width-523, canvas.height-644 ));
    this.myAxes.push(new Box2DBoxEdge ( canvas.width-523, canvas.height-644, canvas.width-516, canvas.height-660 ));
    this.myAxes.push(new Box2DBoxEdge (canvas.width-516, canvas.height-660, canvas.width-511, canvas.height-684 ));
    this.myAxes.push(new Box2DBoxEdge ( canvas.width-511, canvas.height-684, canvas.width-511, canvas.height-692 ));
    this.myAxes.push(new Box2DBoxEdge ( canvas.width-511, canvas.height-692, canvas.width-499, canvas.height-716 ));
    this.myAxes.push(new Box2DBoxEdge ( canvas.width-499, canvas.height-716, canvas.width-484, canvas.height-731 ));
    this.myAxes.push(new Box2DBoxEdge ( canvas.width-484, canvas.height-731, canvas.width-455, canvas.height-746 ));
    this.myAxes.push(new Box2DBoxEdge (  canvas.width-455, canvas.height-746, canvas.width-406, canvas.height-760 ));
    this.myAxes.push(new Box2DBoxEdge (  canvas.width-406, canvas.height-760, canvas.width-345, canvas.height-766));
    this.myAxes.push(new Box2DBoxEdge (   canvas.width-345, canvas.height-766, canvas.width-188, canvas.height-766));
    this.myAxes.push(new Box2DBoxEdge (  canvas.width-188, canvas.height-766, canvas.width-102, canvas.height-741));
    this.myAxes.push(new Box2DBoxEdge (  canvas.width-102, canvas.height-741, canvas.width-43, canvas.height-697));
    this.myAxes.push(new Box2DBoxEdge (  canvas.width-43, canvas.height-697, canvas.width-43, canvas.height-661));
    this.myAxes.push(new Box2DBoxEdge (  canvas.width-43, canvas.height-697, canvas.width-0, canvas.height-697));
    //this.myAxes.push(new Box2DBoxEdge (  43, 697, 0, 670));



    /*
     NEUE RÖHREN ENDE!!!
     */


    //rechts unten
    this.myAxes.push(new Box2DBoxEdge ( 1024-17-14, 512-7, 1024-38-14, 542-7));
    this.myAxes.push(new Box2DBoxEdge ( 1024-38-14, 542-7, 1024-40-14, 561-7));
    this.myAxes.push(new Box2DBoxEdge ( 1024-40-14, 561-7, 1024-48-14, 584-7));
    this.myAxes.push(new Box2DBoxEdge ( 1024-48-14, 584-7, 1024-62-14, 607-7));
    this.myAxes.push(new Box2DBoxEdge ( 1024-62-14, 607-7, 1024-79-14, 625-7));
    this.myAxes.push(new Box2DBoxEdge ( 1024-79-14, 625-7, 1024-98-14, 639-7));
    this.myAxes.push(new Box2DBoxEdge ( 1024-98-14, 639-7, 1024-124-14, 655-7));
    this.myAxes.push(new Box2DBoxEdge ( 1024-124-14, 655-7, 1024-162-14, 669-7));
    this.myAxes.push(new Box2DBoxEdge ( 1024-162-14, 669-7, 1024-175-14, 682-7));
    this.myAxes.push(new Box2DBoxEdge ( 1024-175-14, 682-7, 1024-194-14, 691-7));
    this.myAxes.push(new Box2DBoxEdge ( 1024-194-14, 691-7, 1024-217-14, 691-7));
    this.myAxes.push(new Box2DBoxEdge ( 1024-217-14, 691-7, 1024-239-14, 681-7));
    this.myAxes.push(new Box2DBoxEdge ( 1024-239-14, 681-7, 1024-250-14, 666-7));
    this.myAxes.push(new Box2DBoxEdge ( 1024-250-14, 666-7, 1024-254-14, 652-7));
    this.myAxes.push(new Box2DBoxEdge ( 1024-254-14, 652-7, 1024-297-14, 768-75-7));

    this.myAxes.push(new Box2DBoxEdge ( 1024-159-14, 624-7, 1024-140-14, 618-7));
    this.myAxes.push(new Box2DBoxEdge ( 1024-140-14, 618-7, 1024-123-14, 609-7));
    this.myAxes.push(new Box2DBoxEdge ( 1024-123-14, 609-7, 1024-111-14, 600-7));
    this.myAxes.push(new Box2DBoxEdge ( 1024-111-14, 600-7, 1024-94-14, 582-7));
    this.myAxes.push(new Box2DBoxEdge ( 1024-94-14, 582-7, 1024-84-14, 565-7));
    this.myAxes.push(new Box2DBoxEdge ( 1024-84-14, 565-7, 1024-79-14, 541-7));
    this.myAxes.push(new Box2DBoxEdge ( 1024-79-14, 541-7, 1024-63-14, 510-7));

    this.myAxes.push(new Box2DBoxEdge ( 1024-224-14, 594-7, 1024-204-14, 592-7));
    this.myAxes.push(new Box2DBoxEdge ( 1024-204-14, 592-7, 1024-183-14, 598-7));
    this.myAxes.push(new Box2DBoxEdge ( 1024-183-14, 598-7, 1024-168-14, 609-7));
    this.myAxes.push(new Box2DBoxEdge ( 1024-168-14, 609-7, 1024-159-14, 624-7));

    //3D

    this.myAxes.push(new Box2DBoxEdge ( 1024-145-14, 619-7, 1024-157-14, 605-7));
    this.myAxes.push(new Box2DBoxEdge ( 1024-157-14, 605-7, 1024-170-14, 596-7));
    this.myAxes.push(new Box2DBoxEdge ( 1024-170-14, 596-7, 1024-192-14, 593-7));

    /*
     neue Röhren!!
     */
    //Röhre ins aus - rechte seite
    this.myAxes.push(new Box2DBoxEdge ( canvas.width-309, canvas.height-87, canvas.width-256, canvas.height-63));
    this.myAxes.push(new Box2DBoxEdge ( canvas.width-256, canvas.height-63, canvas.width-190, canvas.height-56));
    this.myAxes.push(new Box2DBoxEdge (  canvas.width-190, canvas.height-56, canvas.width-153, canvas.height-57));
    this.myAxes.push(new Box2DBoxEdge ( canvas.width-153, canvas.height-57, canvas.width-102, canvas.height-69));
    this.myAxes.push(new Box2DBoxEdge ( canvas.width-102, canvas.height-69, canvas.width-48, canvas.height-94));
    this.myAxes.push(new Box2DBoxEdge ( canvas.width-48, canvas.height-94, canvas.width-0, canvas.height-137));
//röhre ins aus-linke Seite
    this.myAxes.push(new Box2DBoxEdge (canvas.width-464, canvas.height-169, canvas.width-444,canvas.height-169 ));
    this.myAxes.push(new Box2DBoxEdge (canvas.width-444,canvas.height-169, canvas.width-475, canvas.height-142 ));
    this.myAxes.push(new Box2DBoxEdge (canvas.width-475, canvas.height-142, canvas.width-495, canvas.height-93 ));
    this.myAxes.push(new Box2DBoxEdge ( canvas.width-495, canvas.height-93, canvas.width-469, canvas.height-44 ));
    this.myAxes.push(new Box2DBoxEdge ( canvas.width-469, canvas.height-44, canvas.width-407, canvas.height-15 ));
    this.myAxes.push(new Box2DBoxEdge ( canvas.width-407, canvas.height-15, canvas.width-346, canvas.height-4 ));
    this.myAxes.push(new Box2DBoxEdge ( canvas.width-346, canvas.height-4, canvas.width-203, canvas.height-3 ));
    this.myAxes.push(new Box2DBoxEdge ( canvas.width-203, canvas.height-3, canvas.width-129, canvas.height-15 ));
    this.myAxes.push(new Box2DBoxEdge (canvas.width-129, canvas.height-15, canvas.width-29, canvas.height-69 ));
    this.myAxes.push(new Box2DBoxEdge (canvas.width-29, canvas.height-69, canvas.width-0, canvas.height-69 ));
    //kleines Stück
    this.myAxes.push(new Box2DBoxEdge (canvas.width-444, canvas.height-30, canvas.width-400, canvas.height-35));
    this.myAxes.push(new Box2DBoxEdge ( canvas.width-400, canvas.height-35, canvas.width-361, canvas.height-55));
    /*
     neue röhren ende!!
     */
    


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
    this.fixDef.restitution = 0.4;
    if (x1 > 870 || x2 > 870 || x1 < 140 || x2 < 140){
       // this.fixDef.restitution = 0.5;
    }

    this.bodyDef = new b2BodyDef;
    this.bodyDef.type = b2Body.b2_staticBody;
    this.fixDef.shape = new b2PolygonShape;
    //this.bodyDef.GetBody().SetUserData(this);

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