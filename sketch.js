function setup() {
  angleMode(DEGREES);
}

function draw() {
  background(50,50,50); 
  translate(200,200);

  sc = second();
  mn = sc/60+minute();
  hr = mn/60+hour();

  strokeWeight(4);

  scAngle = map(sc,0,60,0,360);
  mnAngle = map(mn,0,60,0,360);
  hrAngle = map(hr,0,12,0,360);

  asc = scAngle-90;
  amn = mnAngle-90;
  ahr = hrAngle-90;

  noFill();

    stroke(0, 255 , 0);
    arc(0,0,300,300,-90,scAngle-90);
    rotate(asc);
    line(0,0,100,0);
    rotate(asc*-1);
  
    stroke(0,155,0);
    arc(0,0,300-14,300-14,-90,mnAngle-90);
    rotate(amn);
    line(0,0,80,0)
    rotate(amn*-1);
  
    stroke(0,100,0);
    arc(0,0,300-14-14,300-14-14,-90,hrAngle-90);
    rotate(ahr);
    line(0,0,50,0);
    rotate(ahr*-1);

  drawSprites();
}