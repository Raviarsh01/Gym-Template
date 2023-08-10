import React, { useEffect } from "react";
const Blog = () => {
  useEffect(() => {
    window.scroll(0, 0);
  });
  return (
    <>
      <div className="red-line"></div>

      <div className="containerB-blog">
        <h2>Exercises</h2>
        <p>
          Bodyweight exercises are simple, effective ways to improve balance,
          flexibility, and strength without gym machines or equipment. You can
          do all these bodyweight exercises at home.
        </p>
      </div>
      <div className="containerB-blog1">
        <div className="containerB-1-a">
          <div>
            <a href="#">
              <img src="Images\Blog\1.jpg" className="image" />
            </a>
            <h2 className="heading">Arm circles</h2>
            <p className="para">
              Stand with your arms extended by your sides, perpendicular to your
              torso. Slowly make clockwise circles about 1 foot in diameter for
              20—30 seconds. Then reverse the movement, going
              counterclockwise....<a href="#">Read More</a>
            </p>
          </div>
          <div className="date-comment">
            <div>
              <img className="date" src="Images\Blog\calender.png" />2 Nov, 2022
            </div>
            <div>
              <img className="comment" src="Images\Blog\comment.png" />4
            </div>
          </div>
        </div>
        <div className="containerB-1-b">
          <a href="#">
            <img src="Images\Blog\2.jpg" className="image" />
          </a>
          <h2 className="heading">Plank</h2>
          <p className="para">
            Lie facedown with your forearms on the floor and your hands clasped.
            Extend your legs behind you and rise up onto your toes. Keeping your
            back straight, tighten your core and hold the position for 30—60
            seconds (or as long as you can hang).. ..<a href="#">Read More</a>
          </p>
          <div className="date-comment">
            <div>
              <img className="date" src="Images\Blog\calender.png" />
              23 Mar, 2022
            </div>
            <div>
              <img className="comment" src="Images\Blog\comment.png" />
              124
            </div>
          </div>
        </div>
        <div className="containerB-1-c">
          <a href="#">
            <img src="Images\Blog\3.png" className="image" />
          </a>
          <h2 className="heading">Squat</h2>
          <p className="para">
            Stand with your feet parallel or turned out 15 degrees — whatever is
            most comfortable. Slowly start to crouch by bending your hips and
            knees until your thighs are at least parallel to the floor. Make
            sure your heels do not rise off the floor. Press through your heels
            to return to a standing position....<a href="#">Read More</a>
          </p>
          <div className="date-comment">
            <div className="date-align">
              <img className="date" src="Images\Blog\calender.png" />
              11 JUly, 2022
            </div>
            <div>
              <img className="comment" src="Images\Blog\comment.png" />
              40
            </div>
          </div>
        </div>
        <div className="containerB-1-d">
          <a href="#">
            <img src="Images\Blog\4.jpg" className="image" />
          </a>
          <h2 className="heading">Shoulder bridge</h2>
          <p className="para">
            {" "}
            Lie faceup with your knees bent and your feet hip-width apart. Place
            your arms at your sides and lift your spine and hips. Only your
            head, feet, arms, and shoulders should be on the floor. Lift one
            leg, keeping your core tight. Slowly bring your leg back down, then
            lift back up and spine back onto the floor. ...
            <a href="#">Read More</a>
          </p>
          <div className="date-comment">
            <div>
              <img className="date" src="Images\Blog\calender.png" />
              12 Jan, 2022
            </div>
            <div>
              <img className="comment" src="Images\Blog\comment.png" />
              18
            </div>
          </div>
        </div>
        <div className="containerB-1-e">
          <a href="#">
            <img src="Images\Blog\5.jpg" className="image" />
          </a>
          <h2 className="heading">Mountain climber</h2>
          <p className="para">
            {" "}
            Start on your hands and knees. Bring your left foot forward to
            directly under your chest while straightening your right leg.
            Keeping your hands on the floor and your core tight, jump and switch
            legs. Your left leg should now be extended behind you, with your
            right knee forward....<a href="#">Read More</a>
          </p>
          <div className="date-comment">
            <div>
              <img className="date" src="Images\Blog\calender.png" />
              19 Oct, 2022
            </div>
            <div>
              <img className="comment" src="Images\Blog\comment.png" />7
            </div>
          </div>
        </div>
        <div className="containerB-1-f">
          <a href="#">
            <img src="Images\Blog\6.jpg" className="image" />
          </a>
          <h2 className="heading">Wall sit</h2>
          <p className="para">
            {" "}
            Slowly slide your back down a wall until your thighs are parallel to
            the floor. Make sure your knees are directly above your ankles and
            keep your back straight. Go for 60 seconds per set....
            <a href="#">Read More</a>
          </p>
          <div className="date-comment">
            <div>
              <img className="date" src="Images\Blog\calender.png" />
              27 Nov, 2022
            </div>
            <div>
              <img className="comment" src="Images\Blog\comment.png" />
              54
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
