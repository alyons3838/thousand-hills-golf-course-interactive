export interface HoleData {
  number: number;
  name: string;
  par: number;
  yardage: {
    black?: number | string;
    white?: number | string;
    gold?: number | string;
    red?: number | string;
  };
  description: string;
  strategy: string;
  videoUrl: string;
  difficulty?: number;
}

export const holes: HoleData[] = [
  {
    number: 1,
    name: "The Intimidating Start",
    par: 4,
    yardage: { black: 385 },
    description: "A very difficult starting hole, primarily due to the intimidation factor off the tee.",
    strategy: "You are faced with Wildwood creek in front and below, a steep slope and fairway bunkers to the left, and sheer rock outcroppings to the right. The perfect tee shot carries 175+ yards to a flat fairway, leaving a relatively easy short iron approach. A miss to the right is preferable, as a bounce off the rocks or a lie in the rough is better than the creek on the left. The green is wide and deep with moderate speed.",
    videoUrl: "https://www.youtube.com/watch?v=ufqC43Trvlw"
  },
  {
    number: 2,
    name: "Deceptive Short Game",
    par: 3,
    yardage: { black: 124, red: 71 },
    description: "The shortest hole on the course, but don't let it fool you.",
    strategy: "This hole seems like a 'cake walk' and is the easiest to obtain a hole-in-one on. However, the green is heavily guarded by bunkers on the left and behind, with heavy mounding and rough on the right. Wildwood creek looms 30 feet below the green on the left. A mishit to the right or short is desired to avoid the steep drop-off to the creek.",
    videoUrl: "https://www.youtube.com/watch?v=xb8GEf3GOAw"
  },
  {
    number: 3,
    name: "Course Management Required",
    par: 4,
    yardage: { black: 367, white: 308, gold: 300, red: 247 },
    description: "Ranked as the third toughest hole, demanding course management.",
    strategy: "The fairway landing area is large, but two center bunkers signal trouble ahead where the fairway significantly narrows. Severe elevation changes, bunkers, and woods lie to the left. Using a 3-wood or 5-wood off the tee is advisable to avoid shooting through the landing area. The green is smaller, circular, and features a severe slope around the back and left, though the center is relatively flat.",
    videoUrl: "https://www.youtube.com/watch?v=-1T8btlPR3I",
    difficulty: 3
  },
  {
    number: 4,
    name: "The Water Carry",
    par: 3,
    yardage: { black: 164, white: 129, gold: 119, red: 95 },
    description: "Dominated by a pond spanning the entire width of the hole.",
    strategy: "The pond sits just ten feet from the front edge of the green, separated by a stack rock wall. The entire hole requires a carry with no short bailout area. The green complex has severe slopes off the back, making it difficult to stop a chip shot. The putting surface is deceiving, with the back flared up and sloping forward.",
    videoUrl: "https://www.youtube.com/watch?v=j_09FQfWPo0"
  },
  {
    number: 5,
    name: "The 90-Degree Dogleg",
    par: 4,
    yardage: { black: 350, white: 340, gold: 300, red: 245 },
    description: "Features a dramatic 90-degree dogleg right.",
    strategy: "Club selection off the elevated tee is critical. Hitting the green off the tee is a high-risk shot; a safer play is a club less than 250 yards placed slightly right in the fairway. The approach is slightly downhill to a green guarded by bunkers on the right and rear. The green has three distinct tiers, making putting a challenge.",
    videoUrl: "https://www.youtube.com/watch?v=R_APug1Nw-k"
  },
  {
    number: 6,
    name: "Elevation and Options",
    par: 4,
    yardage: { black: 388, white: 352, gold: 338, red: 303 },
    description: "Tees elevated at least 50 feet above the landing area.",
    strategy: "Players can choose a safe shot to the 195-215 yard landing area, draw the ball around the left side, or take a risky 285-yard carry to cut the corner. The approach is to a green guarded on the right by a large bunker and steep grades. The putting green has significant character and can break in any direction.",
    videoUrl: "https://www.youtube.com/watch?v=kk8SpVF4oGI"
  },
  {
    number: 7,
    name: "The Tight Chute",
    par: 3,
    yardage: { black: 162, white: 142, gold: 121, red: 101 },
    description: "Ranked as the 10th most difficult hole.",
    strategy: "This short par 3 plays from a tight chute of trees over a creek. A tree on the left obscures the full view of the putting surface from the tee. The green is well-bunkered on the front right and back left but offers a relatively flat putting surface, presenting a good birdie opportunity for an accurate tee shot.",
    videoUrl: "https://www.youtube.com/watch?v=l6kbpVEb7jQ",
    difficulty: 10
  },
  {
    number: 8,
    name: "Downhill Challenge",
    par: 3,
    yardage: { black: 174, white: 154, gold: 142, red: 128 },
    description: "A severely downhill par 3 that usually plays into the wind.",
    strategy: "Club selection is difficult due to the wind and elevation change. Bunkers guard the front right and back. The front is open, allowing for a bounce onto the putting surface if a club is mishit. The green slopes left to right with a small ridge in the front.",
    videoUrl: "https://www.youtube.com/watch?v=TE0Ww19XoC0"
  },
  {
    number: 9,
    name: "The Monster Par 5",
    par: 5,
    yardage: { black: "460/417", white: "417/380", gold: 380, red: 350 },
    description: "The first par 5 on the course presents numerous hazards.",
    strategy: "The optimal tee shot is slightly left of center; too far right risks Wildwood creek. The second shot often requires a layup. The approach is to a green elevated 30 feet, guarded by bunkers, a 30-foot cliff in front, and a 15-foot cliff in back. Wildwood creek runs directly in front of the green. The green has a severe front slope.",
    videoUrl: "https://www.youtube.com/watch?v=gOXpFhQqp6M"
  },
  {
    number: 10,
    name: "Unforgiving Precision",
    par: 3,
    yardage: { black: 187, white: 160, gold: 150, red: 143 },
    description: "An elevated par 3 that plays its full yardage and offers no forgiveness.",
    strategy: "Wildwood creek runs along the left and crosses in front of the red tees, accompanied by a hungry native area. Bunkers protect the front and left of the green. A small approach area exists short, and the right side is hilly rough. The green is large with central undulation.",
    videoUrl: "https://www.youtube.com/watch?v=jpPz--DkgaY"
  },
  {
    number: 11,
    name: "The Rock Bluff",
    par: 3,
    yardage: { black: 162, white: 119, gold: 102, red: 102 },
    description: "Features a large rock bluff running along the right side.",
    strategy: "Wildwood creek on the left, native area in front of the tees, and a dramatic rock bluff on the right. The green is protected by bunkers in the front, middle left, and rear. The rock bluff can sometimes yield a favorable bounce onto the pear-shaped green, which is narrow and tilted forward in the back.",
    videoUrl: "https://www.youtube.com/watch?v=zeYhlFS9zZ4"
  },
  {
    number: 12,
    name: "Accuracy Premium",
    par: 3,
    yardage: { black: 135 },
    description: "Accuracy is vital on this short par 3.",
    strategy: "The green is perched above Wildwood creek on the left and bunkered on the left, right, and behind. The green is divided by rolls and tiers, making it essential to hit the correct section to avoid complex putts.",
    videoUrl: "https://www.youtube.com/watch?v=fL6G-iJN1bw"
  },
  {
    number: 13,
    name: "Uphill Climb",
    par: 4,
    yardage: { black: 386 },
    description: "Requires a solid tee shot across Slick Rock Branch.",
    strategy: "The wide, gently rolling fairway climbs uphill to the green. A large depression sits front-left of the green, with a bunker to the right and another back-left. The green is bi-level.",
    videoUrl: "https://www.youtube.com/watch?v=XdgGx1QtRfM"
  },
  {
    number: 14,
    name: "Strategic Short Par 4",
    par: 4,
    yardage: { black: 307 },
    description: "The shortest par 4 on the course offers strategic options.",
    strategy: "A split, two-level fairway awaits. Hitting to the high, narrow fairway between bunkers provides an open view and easier approach. The wider, lower fairway leaves a challenging second shot to a narrow, elevated green fronted by deep bunkers.",
    videoUrl: "https://www.youtube.com/watch?v=Z07-TKtqAeU"
  },
  {
    number: 15,
    name: "Downhill Drop",
    par: 3,
    yardage: { black: 181 },
    description: "Plays slightly shorter than its measured distance due to the downhill drop.",
    strategy: "Bordered by an exposed rock face on the right and Deer Lick Branch on the left. The narrow green is bunkered on both sides, with the fairway flowing around the bunkers to create interesting chipping options.",
    videoUrl: "https://www.youtube.com/watch?v=wXh-3JqLOk0"
  },
  {
    number: 16,
    name: "The Sweeping Par 5",
    par: 5,
    yardage: { black: 425 },
    description: "This par 5 turns around a slope climbing to the right.",
    strategy: "Wildwood creek runs along the left of the tee shot, and a rock-lined stream splits the fairway past the landing area. The approach features a steep slope with bunkers and hollows on the left. The green arcs around a deep nose protruding from the back.",
    videoUrl: "https://www.youtube.com/watch?v=jaGRrEH_WUI"
  },
  {
    number: 17,
    name: "Sandpiper Lake View",
    par: 3,
    yardage: { black: 205 },
    description: "A long par 3 sitting on a slope falling left into Sandpiper Lake.",
    strategy: "Wildwood creek flows into an upper pond that cascades into the lake. A large, complex bunker extends up the left side. The elongated green can change the effective distance by up to three clubs. The elevated tees offer panoramic views.",
    videoUrl: "https://www.youtube.com/watch?v=bxW8fp54scA"
  },
  {
    number: 18,
    name: "The Exciting Finish",
    par: 5,
    yardage: { black: 533 },
    description: "A reachable par 5 playing slightly downhill for an exciting finish.",
    strategy: "The tee shot crosses Sandpiper Lake to a fairway bordered by Wildwood creek on the left, which then crosses the fairway and runs down the right. Bunkers guard the right side of the green and the back-left. A well-played hole offers a strong chance for a closing birdie.",
    videoUrl: "https://www.youtube.com/watch?v=25QtNSxotaQ"
  }
];

export const courseStats = {
  par: 64,
  holes: 18,
  composition: "3 Par 5s, 6 Par 4s, 9 Par 3s",
  tees: [
    { name: "Black/Blue", yardage: 5111, rating: 66.5, slope: 125 },
    { name: "White", yardage: 4592, rating: 64.7, slope: 116 },
    { name: "Gold", yardage: 4000, slope: 112 },
    { name: "Red", yardage: 3616, rating: 64.1, slope: 113 }
  ]
};
