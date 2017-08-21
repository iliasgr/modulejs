
var print  = print || function(s) { console.log(s);}
var zcom = zcom || {};

zcom.compuskor = zcom.compuskor || {};
zcom.compuskor.module1 = zcom.compuskor.module1 || {x:0,y:20};
zcom.compuskor.module1.hello=function(){ print('Hello');}
zcom.compuskor.module1.a=21;


		print(zcom.compuskor.module1);

                print(zcom.compuskor.module1.a);
                print(zcom.compuskor.module1.x);


  zcom.compuskor.module1.hello();




