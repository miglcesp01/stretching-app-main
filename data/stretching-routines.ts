interface Exercise {
  name: string
  description: string
  duration: number
}

interface RoutinesByDuration {
  [key: number]: Exercise[]
}

interface StretchingRoutines {
  [key: string]: RoutinesByDuration
}

export const stretchingRoutines: StretchingRoutines = {
  full: {
    5: [
      {
        name: "Neck Rolls",
        description: "Gently roll your neck in a circular motion, 5 times in each direction",
        duration: 30,
      },
      {
        name: "Shoulder Rolls",
        description: "Roll your shoulders forward and backward",
        duration: 30,
      },
      {
        name: "Standing Side Stretch",
        description: "Reach your arm overhead and lean to each side",
        duration: 40,
      },
      {
        name: "Forward Fold",
        description: "Bend forward from the hips, keeping a slight bend in the knees",
        duration: 40,
      },
      {
        name: "Quad Stretch",
        description: "Hold your foot behind you to stretch the front of your thigh",
        duration: 30,
      },
      {
        name: "Calf Stretch",
        description: "Step one foot back, press heel down to stretch calf",
        duration: 30,
      },
      {
        name: "Child's Pose",
        description: "Kneel and reach arms forward, resting your forehead on the mat",
        duration: 40,
      },
    ],
    10: [
      {
        name: "Neck Rolls",
        description: "Gently roll your neck in a circular motion, 5 times in each direction",
        duration: 40,
      },
      {
        name: "Shoulder Rolls",
        description: "Roll your shoulders forward and backward",
        duration: 40,
      },
      {
        name: "Arm Circles",
        description: "Make small and large circles with your arms",
        duration: 40,
      },
      {
        name: "Standing Side Stretch",
        description: "Reach your arm overhead and lean to each side",
        duration: 60,
      },
      {
        name: "Forward Fold",
        description: "Bend forward from the hips, keeping a slight bend in the knees",
        duration: 60,
      },
      {
        name: "Lunging Hip Flexor Stretch",
        description: "Step one foot forward into a lunge position to stretch hip flexors",
        duration: 60,
      },
      {
        name: "Quad Stretch",
        description: "Hold your foot behind you to stretch the front of your thigh",
        duration: 40,
      },
      {
        name: "Hamstring Stretch",
        description: "Sit with one leg extended and reach toward your toes",
        duration: 60,
      },
      {
        name: "Calf Stretch",
        description: "Step one foot back, press heel down to stretch calf",
        duration: 40,
      },
      {
        name: "Child's Pose",
        description: "Kneel and reach arms forward, resting your forehead on the mat",
        duration: 60,
      },
    ],
    15: [
      {
        name: "Neck Rolls",
        description: "Gently roll your neck in a circular motion, 5 times in each direction",
        duration: 45,
      },
      {
        name: "Shoulder Rolls",
        description: "Roll your shoulders forward and backward",
        duration: 45,
      },
      {
        name: "Arm Circles",
        description: "Make small and large circles with your arms",
        duration: 45,
      },
      {
        name: "Cat-Cow Stretch",
        description: "Alternate between arching and rounding your back on hands and knees",
        duration: 60,
      },
      {
        name: "Standing Side Stretch",
        description: "Reach your arm overhead and lean to each side",
        duration: 60,
      },
      {
        name: "Forward Fold",
        description: "Bend forward from the hips, keeping a slight bend in the knees",
        duration: 60,
      },
      {
        name: "Lunging Hip Flexor Stretch",
        description: "Step one foot forward into a lunge position to stretch hip flexors",
        duration: 60,
      },
      {
        name: "Pigeon Pose",
        description: "Bring one leg forward with knee bent and extend the other leg behind you",
        duration: 60,
      },
      {
        name: "Quad Stretch",
        description: "Hold your foot behind you to stretch the front of your thigh",
        duration: 45,
      },
      {
        name: "Hamstring Stretch",
        description: "Sit with one leg extended and reach toward your toes",
        duration: 60,
      },
      {
        name: "Butterfly Stretch",
        description: "Sit with soles of feet together and knees out to the sides",
        duration: 60,
      },
      {
        name: "Calf Stretch",
        description: "Step one foot back, press heel down to stretch calf",
        duration: 45,
      },
      {
        name: "Spinal Twist",
        description: "Lie on your back, bring knees to chest, and twist to each side",
        duration: 60,
      },
      {
        name: "Child's Pose",
        description: "Kneel and reach arms forward, resting your forehead on the mat",
        duration: 60,
      },
    ],
  },
  upper: {
    5: [
      {
        name: "Neck Rolls",
        description: "Gently roll your neck in a circular motion, 5 times in each direction",
        duration: 40,
      },
      {
        name: "Shoulder Rolls",
        description: "Roll your shoulders forward and backward",
        duration: 40,
      },
      {
        name: "Arm Circles",
        description: "Make small and large circles with your arms",
        duration: 40,
      },
      {
        name: "Chest Opener",
        description: "Clasp hands behind back and lift arms to open chest",
        duration: 40,
      },
      {
        name: "Tricep Stretch",
        description: "Reach one arm overhead and bend elbow, use other hand to gently pull elbow",
        duration: 40,
      },
      {
        name: "Wrist Circles",
        description: "Rotate wrists in both directions",
        duration: 30,
      },
      {
        name: "Finger Stretches",
        description: "Spread fingers wide, then make a fist, repeat",
        duration: 30,
      },
    ],
    10: [
      {
        name: "Neck Rolls",
        description: "Gently roll your neck in a circular motion, 5 times in each direction",
        duration: 45,
      },
      {
        name: "Neck Side Stretch",
        description: "Tilt ear toward shoulder on each side",
        duration: 45,
      },
      {
        name: "Shoulder Rolls",
        description: "Roll your shoulders forward and backward",
        duration: 45,
      },
      {
        name: "Arm Circles",
        description: "Make small and large circles with your arms",
        duration: 45,
      },
      {
        name: "Cross-Body Shoulder Stretch",
        description: "Bring one arm across chest and hold with other arm",
        duration: 45,
      },
      {
        name: "Chest Opener",
        description: "Clasp hands behind back and lift arms to open chest",
        duration: 60,
      },
      {
        name: "Tricep Stretch",
        description: "Reach one arm overhead and bend elbow, use other hand to gently pull elbow",
        duration: 45,
      },
      {
        name: "Forearm Stretch",
        description: "Extend arm with palm up, use other hand to gently pull fingers back",
        duration: 45,
      },
      {
        name: "Wrist Circles",
        description: "Rotate wrists in both directions",
        duration: 30,
      },
      {
        name: "Finger Stretches",
        description: "Spread fingers wide, then make a fist, repeat",
        duration: 30,
      },
    ],
    15: [
      {
        name: "Neck Rolls",
        description: "Gently roll your neck in a circular motion, 5 times in each direction",
        duration: 45,
      },
      {
        name: "Neck Side Stretch",
        description: "Tilt ear toward shoulder on each side",
        duration: 45,
      },
      {
        name: "Chin Tucks",
        description: "Draw chin in toward neck to stretch back of neck",
        duration: 45,
      },
      {
        name: "Shoulder Rolls",
        description: "Roll your shoulders forward and backward",
        duration: 45,
      },
      {
        name: "Arm Circles",
        description: "Make small and large circles with your arms",
        duration: 45,
      },
      {
        name: "Cross-Body Shoulder Stretch",
        description: "Bring one arm across chest and hold with other arm",
        duration: 60,
      },
      {
        name: "Chest Opener",
        description: "Clasp hands behind back and lift arms to open chest",
        duration: 60,
      },
      {
        name: "Tricep Stretch",
        description: "Reach one arm overhead and bend elbow, use other hand to gently pull elbow",
        duration: 60,
      },
      {
        name: "Bicep Stretch",
        description: "Extend arm with palm facing up, gently pull fingers back",
        duration: 45,
      },
      {
        name: "Forearm Stretch",
        description: "Extend arm with palm up, use other hand to gently pull fingers back",
        duration: 45,
      },
      {
        name: "Wrist Circles",
        description: "Rotate wrists in both directions",
        duration: 30,
      },
      {
        name: "Finger Stretches",
        description: "Spread fingers wide, then make a fist, repeat",
        duration: 30,
      },
      {
        name: "Eagle Arms",
        description: "Cross arms in front of body, bend elbows, and lift arms",
        duration: 60,
      },
      {
        name: "Thread the Needle",
        description: "From all fours, thread one arm under the other and rest on shoulder",
        duration: 60,
      },
    ],
  },
  lower: {
    5: [
      {
        name: "Standing Quad Stretch",
        description: "Hold your foot behind you to stretch the front of your thigh",
        duration: 40,
      },
      {
        name: "Hamstring Stretch",
        description: "Sit with one leg extended and reach toward your toes",
        duration: 40,
      },
      {
        name: "Calf Stretch",
        description: "Step one foot back, press heel down to stretch calf",
        duration: 40,
      },
      {
        name: "Ankle Circles",
        description: "Rotate each ankle in both directions",
        duration: 30,
      },
      {
        name: "Butterfly Stretch",
        description: "Sit with soles of feet together and knees out to the sides",
        duration: 40,
      },
      {
        name: "Lunging Hip Flexor Stretch",
        description: "Step one foot forward into a lunge position to stretch hip flexors",
        duration: 40,
      },
      {
        name: "Standing Forward Fold",
        description: "Bend forward from the hips, keeping a slight bend in the knees",
        duration: 40,
      },
    ],
    10: [
      {
        name: "Standing Quad Stretch",
        description: "Hold your foot behind you to stretch the front of your thigh",
        duration: 45,
      },
      {
        name: "Hamstring Stretch",
        description: "Sit with one leg extended and reach toward your toes",
        duration: 60,
      },
      {
        name: "Calf Stretch",
        description: "Step one foot back, press heel down to stretch calf",
        duration: 45,
      },
      {
        name: "Ankle Circles",
        description: "Rotate each ankle in both directions",
        duration: 30,
      },
      {
        name: "Butterfly Stretch",
        description: "Sit with soles of feet together and knees out to the sides",
        duration: 60,
      },
      {
        name: "Lunging Hip Flexor Stretch",
        description: "Step one foot forward into a lunge position to stretch hip flexors",
        duration: 60,
      },
      {
        name: "Pigeon Pose",
        description: "Bring one leg forward with knee bent and extend the other leg behind you",
        duration: 60,
      },
      {
        name: "Standing Forward Fold",
        description: "Bend forward from the hips, keeping a slight bend in the knees",
        duration: 60,
      },
      {
        name: "Figure Four Stretch",
        description: "Cross ankle over opposite knee while sitting or lying down",
        duration: 60,
      },
      {
        name: "Seated Spinal Twist",
        description: "Sit with legs extended, bend one knee and twist toward that side",
        duration: 60,
      },
    ],
    15: [
      {
        name: "Standing Quad Stretch",
        description: "Hold your foot behind you to stretch the front of your thigh",
        duration: 45,
      },
      {
        name: "Hamstring Stretch",
        description: "Sit with one leg extended and reach toward your toes",
        duration: 60,
      },
      {
        name: "Calf Stretch",
        description: "Step one foot back, press heel down to stretch calf",
        duration: 45,
      },
      {
        name: "Ankle Circles",
        description: "Rotate each ankle in both directions",
        duration: 30,
      },
      {
        name: "Toe Stretches",
        description: "Point and flex toes, then spread them wide",
        duration: 30,
      },
      {
        name: "Butterfly Stretch",
        description: "Sit with soles of feet together and knees out to the sides",
        duration: 60,
      },
      {
        name: "Lunging Hip Flexor Stretch",
        description: "Step one foot forward into a lunge position to stretch hip flexors",
        duration: 60,
      },
      {
        name: "Pigeon Pose",
        description: "Bring one leg forward with knee bent and extend the other leg behind you",
        duration: 60,
      },
      {
        name: "Standing Forward Fold",
        description: "Bend forward from the hips, keeping a slight bend in the knees",
        duration: 60,
      },
      {
        name: "Figure Four Stretch",
        description: "Cross ankle over opposite knee while sitting or lying down",
        duration: 60,
      },
      {
        name: "Seated Spinal Twist",
        description: "Sit with legs extended, bend one knee and twist toward that side",
        duration: 60,
      },
      {
        name: "Lying Hamstring Stretch",
        description: "Lie on back, raise one leg and hold behind thigh",
        duration: 60,
      },
      {
        name: "IT Band Stretch",
        description: "Cross one leg behind the other and lean toward the front leg side",
        duration: 60,
      },
      {
        name: "Happy Baby Pose",
        description: "Lie on back, hold feet with knees bent toward armpits",
        duration: 60,
      },
    ],
  },
  back: {
    5: [
      {
        name: "Cat-Cow Stretch",
        description: "Alternate between arching and rounding your back on hands and knees",
        duration: 60,
      },
      {
        name: "Child's Pose",
        description: "Kneel and reach arms forward, resting your forehead on the mat",
        duration: 60,
      },
      {
        name: "Spinal Twist",
        description: "Lie on your back, bring knees to chest, and twist to each side",
        duration: 60,
      },
      {
        name: "Standing Forward Fold",
        description: "Bend forward from the hips, keeping a slight bend in the knees",
        duration: 60,
      },
      {
        name: "Standing Side Stretch",
        description: "Reach your arm overhead and lean to each side",
        duration: 60,
      },
    ],
    10: [
      {
        name: "Cat-Cow Stretch",
        description: "Alternate between arching and rounding your back on hands and knees",
        duration: 60,
      },
      {
        name: "Child's Pose",
        description: "Kneel and reach arms forward, resting your forehead on the mat",
        duration: 60,
      },
      {
        name: "Thread the Needle",
        description: "From all fours, thread one arm under the other and rest on shoulder",
        duration: 60,
      },
      {
        name: "Spinal Twist",
        description: "Lie on your back, bring knees to chest, and twist to each side",
        duration: 60,
      },
      {
        name: "Standing Forward Fold",
        description: "Bend forward from the hips, keeping a slight bend in the knees",
        duration: 60,
      },
      {
        name: "Standing Side Stretch",
        description: "Reach your arm overhead and lean to each side",
        duration: 60,
      },
      {
        name: "Cobra Pose",
        description: "Lie on stomach, place hands under shoulders, and lift chest",
        duration: 60,
      },
      {
        name: "Bridge Pose",
        description: "Lie on back, bend knees, lift hips toward ceiling",
        duration: 60,
      },
      {
        name: "Seated Forward Fold",
        description: "Sit with legs extended and fold forward from the hips",
        duration: 60,
      },
    ],
    15: [
      {
        name: "Cat-Cow Stretch",
        description: "Alternate between arching and rounding your back on hands and knees",
        duration: 60,
      },
      {
        name: "Child's Pose",
        description: "Kneel and reach arms forward, resting your forehead on the mat",
        duration: 60,
      },
      {
        name: "Thread the Needle",
        description: "From all fours, thread one arm under the other and rest on shoulder",
        duration: 60,
      },
      {
        name: "Spinal Twist",
        description: "Lie on your back, bring knees to chest, and twist to each side",
        duration: 60,
      },
      {
        name: "Standing Forward Fold",
        description: "Bend forward from the hips, keeping a slight bend in the knees",
        duration: 60,
      },
      {
        name: "Standing Side Stretch",
        description: "Reach your arm overhead and lean to each side",
        duration: 60,
      },
      {
        name: "Cobra Pose",
        description: "Lie on stomach, place hands under shoulders, and lift chest",
        duration: 60,
      },
      {
        name: "Sphinx Pose",
        description: "Lie on stomach, prop up on forearms with elbows under shoulders",
        duration: 60,
      },
      {
        name: "Bridge Pose",
        description: "Lie on back, bend knees, lift hips toward ceiling",
        duration: 60,
      },
      {
        name: "Seated Forward Fold",
        description: "Sit with legs extended and fold forward from the hips",
        duration: 60,
      },
      {
        name: "Seated Spinal Twist",
        description: "Sit with legs extended, bend one knee and twist toward that side",
        duration: 60,
      },
      {
        name: "Puppy Pose",
        description: "From hands and knees, keep hips high and walk hands forward, lowering chest to floor",
        duration: 60,
      },
      {
        name: "Supine Figure Four",
        description: "Lie on back, cross ankle over opposite knee and pull thigh toward chest",
        duration: 60,
      },
      {
        name: "Happy Baby Pose",
        description: "Lie on back, hold feet with knees bent toward armpits",
        duration: 60,
      },
    ],
  },
  neck: {
    5: [
      {
        name: "Neck Rolls",
        description: "Gently roll your neck in a circular motion, 5 times in each direction",
        duration: 45,
      },
      {
        name: "Neck Side Stretch",
        description: "Tilt ear toward shoulder on each side",
        duration: 45,
      },
      {
        name: "Chin Tucks",
        description: "Draw chin in toward neck to stretch back of neck",
        duration: 45,
      },
      {
        name: "Shoulder Rolls",
        description: "Roll your shoulders forward and backward",
        duration: 45,
      },
      {
        name: "Ear to Shoulder",
        description: "Gently tilt head to bring ear toward shoulder",
        duration: 45,
      },
      {
        name: "Look Left and Right",
        description: "Slowly turn head to look over each shoulder",
        duration: 45,
      },
    ],
    10: [
      {
        name: "Neck Rolls",
        description: "Gently roll your neck in a circular motion, 5 times in each direction",
        duration: 45,
      },
      {
        name: "Neck Side Stretch",
        description: "Tilt ear toward shoulder on each side",
        duration: 45,
      },
      {
        name: "Chin Tucks",
        description: "Draw chin in toward neck to stretch back of neck",
        duration: 45,
      },
      {
        name: "Shoulder Rolls",
        description: "Roll your shoulders forward and backward",
        duration: 45,
      },
      {
        name: "Ear to Shoulder",
        description: "Gently tilt head to bring ear toward shoulder",
        duration: 45,
      },
      {
        name: "Look Left and Right",
        description: "Slowly turn head to look over each shoulder",
        duration: 45,
      },
      {
        name: "Chest Opener",
        description: "Clasp hands behind back and lift arms to open chest",
        duration: 60,
      },
      {
        name: "Upper Trapezius Stretch",
        description: "Gently pull head to side with hand, other hand behind back",
        duration: 60,
      },
      {
        name: "Levator Scapulae Stretch",
        description: "Look down toward armpit and gently pull head forward",
        duration: 60,
      },
      {
        name: "Wall Angels",
        description: "Stand with back against wall, slide arms up and down like making snow angels",
        duration: 60,
      },
    ],
    15: [
      {
        name: "Neck Rolls",
        description: "Gently roll your neck in a circular motion, 5 times in each direction",
        duration: 45,
      },
      {
        name: "Neck Side Stretch",
        description: "Tilt ear toward shoulder on each side",
        duration: 45,
      },
      {
        name: "Chin Tucks",
        description: "Draw chin in toward neck to stretch back of neck",
        duration: 45,
      },
      {
        name: "Shoulder Rolls",
        description: "Roll your shoulders forward and backward",
        duration: 45,
      },
      {
        name: "Ear to Shoulder",
        description: "Gently tilt head to bring ear toward shoulder",
        duration: 45,
      },
      {
        name: "Look Left and Right",
        description: "Slowly turn head to look over each shoulder",
        duration: 45,
      },
      {
        name: "Chest Opener",
        description: "Clasp hands behind back and lift arms to open chest",
        duration: 60,
      },
      {
        name: "Upper Trapezius Stretch",
        description: "Gently pull head to side with hand, other hand behind back",
        duration: 60,
      },
      {
        name: "Levator Scapulae Stretch",
        description: "Look down toward armpit and gently pull head forward",
        duration: 60,
      },
      {
        name: "Wall Angels",
        description: "Stand with back against wall, slide arms up and down like making snow angels",
        duration: 60,
      },
      {
        name: "Thread the Needle",
        description: "From all fours, thread one arm under the other and rest on shoulder",
        duration: 60,
      },
      {
        name: "Cat-Cow Stretch",
        description: "Alternate between arching and rounding your back on hands and knees",
        duration: 60,
      },
      {
        name: "Child's Pose",
        description: "Kneel and reach arms forward, resting your forehead on the mat",
        duration: 60,
      },
      {
        name: "Seated Meditation",
        description: "Sit comfortably with good posture, focus on relaxing neck and shoulders",
        duration: 60,
      },
    ],
  },
  hips: {
    5: [
      {
        name: "Butterfly Stretch",
        description: "Sit with soles of feet together and knees out to the sides",
        duration: 60,
      },
      {
        name: "Lunging Hip Flexor Stretch",
        description: "Step one foot forward into a lunge position to stretch hip flexors",
        duration: 60,
      },
      {
        name: "Figure Four Stretch",
        description: "Cross ankle over opposite knee while sitting or lying down",
        duration: 60,
      },
      {
        name: "Seated Spinal Twist",
        description: "Sit with legs extended, bend one knee and twist toward that side",
        duration: 60,
      },
      {
        name: "Kneeling Side Bend",
        description: "Kneel with one leg extended to side, reach arm overhead and lean",
        duration: 60,
      },
    ],
    10: [
      {
        name: "Butterfly Stretch",
        description: "Sit with soles of feet together and knees out to the sides",
        duration: 60,
      },
      {
        name: "Lunging Hip Flexor Stretch",
        description: "Step one foot forward into a lunge position to stretch hip flexors",
        duration: 60,
      },
      {
        name: "Figure Four Stretch",
        description: "Cross ankle over opposite knee while sitting or lying down",
        duration: 60,
      },
      {
        name: "Seated Spinal Twist",
        description: "Sit with legs extended, bend one knee and twist toward that side",
        duration: 60,
      },
      {
        name: "Kneeling Side Bend",
        description: "Kneel with one leg extended to side, reach arm overhead and lean",
        duration: 60,
      },
      {
        name: "Pigeon Pose",
        description: "Bring one leg forward with knee bent and extend the other leg behind you",
        duration: 60,
      },
      {
        name: "Supine Figure Four",
        description: "Lie on back, cross ankle over opposite knee and pull thigh toward chest",
        duration: 60,
      },
      {
        name: "Happy Baby Pose",
        description: "Lie on back, hold feet with knees bent toward armpits",
        duration: 60,
      },
      {
        name: "Lying Spinal Twist",
        description: "Lie on back with arms extended, drop knees to one side",
        duration: 60,
      },
      {
        name: "Bridge Pose",
        description: "Lie on back, bend knees, lift hips toward ceiling",
        duration: 60,
      },
    ],
    15: [
      {
        name: "Butterfly Stretch",
        description: "Sit with soles of feet together and knees out to the sides",
        duration: 60,
      },
      {
        name: "Lunging Hip Flexor Stretch",
        description: "Step one foot forward into a lunge position to stretch hip flexors",
        duration: 60,
      },
      {
        name: "Figure Four Stretch",
        description: "Cross ankle over opposite knee while sitting or lying down",
        duration: 60,
      },
      {
        name: "Seated Spinal Twist",
        description: "Sit with legs extended, bend one knee and twist toward that side",
        duration: 60,
      },
      {
        name: "Kneeling Side Bend",
        description: "Kneel with one leg extended to side, reach arm overhead and lean",
        duration: 60,
      },
      {
        name: "Pigeon Pose",
        description: "Bring one leg forward with knee bent and extend the other leg behind you",
        duration: 60,
      },
      {
        name: "Supine Figure Four",
        description: "Lie on back, cross ankle over opposite knee and pull thigh toward chest",
        duration: 60,
      },
      {
        name: "Happy Baby Pose",
        description: "Lie on back, hold feet with knees bent toward armpits",
        duration: 60,
      },
      {
        name: "Lying Spinal Twist",
        description: "Lie on back with arms extended, drop knees to one side",
        duration: 60,
      },
      {
        name: "Bridge Pose",
        description: "Lie on back, bend knees, lift hips toward ceiling",
        duration: 60,
      },
      {
        name: "Lizard Pose",
        description: "From a lunge, lower the back knee and bring front foot to outer edge of mat",
        duration: 60,
      },
      {
        name: "Frog Pose",
        description: "Kneel with knees wide apart, flex feet and press hips back",
        duration: 60,
      },
      {
        name: "Half Happy Baby",
        description: "Lie on back, hold one foot with knee bent toward armpit",
        duration: 60,
      },
      {
        name: "Seated Wide-Legged Forward Fold",
        description: "Sit with legs spread wide and fold forward from the hips",
        duration: 60,
      },
    ],
  },
}

