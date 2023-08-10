import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  useEffect(()=>{
    window.scroll(0,0);
  })
  return (
    <>
      <div className="containerH-1">
        <p className="containerH-1-a">
          IT’S ALL ABOUT WHAT YOU
          <br />
          CAN ACHIEVE
        </p>
        <p className="containerH-1-b">
          Empower yourself to make the changes you need to make
        </p>
        <br />
        <p className="containerH-1-c">LET'S GET STARTED</p>
      </div>
      <div className="containerH-2">
        <div className="containerH-2-a">
          <p>
            We started modestly as one small gym in a Amritsar in 2012 as a
            welcoming place for a diverse group of people to get fit. While we
            believe in the power of fitness to improve lives, we also know
            exercise is hard work and everyone can use a little more motivation.
            So we’ve fused fitness and entertainment so that we can make serious
            exercise fun.
          </p>
          <p>
            If you’re not sure what your goals are, or don’t know where to start
            on your fitness journey, come in and speak to one of our qualified
            trainers who can help you develop a plan.
          </p>
          <p>
            Life demands a lot. You're being pulled in a million directions. If
            you can't remember the last time you did something for yourself,
            Then Neo Fitness is for you.
          </p>
        </div>
        <div className="containerH-2-b">
          <img src="Images\Home\Home.webp" alt="Gym Image" />
        </div>
      </div>
      <div className="containerH-3">
        <h2>EMBRACE A #NOJUDGMENTS PHILOSOPHY</h2>
        <div className="containerH-3-a">
          <div className="containerH-3-a-1">
            <img className="pic" src="Images\Home\positivity.png" alt="Image" />
            <h2>POSITIVITY</h2>
            <p>
              We are nurturers: We seek only to encourage, entertain and empower
            </p>
          </div>
          <div className="containerH-3-a-1">
            <img
              className="pic"
              src="Images\Home\inclusivity.png"
              alt="Image"
            />
            <h2>INCLUSIVITY</h2>
            <p>
              Here we keep open minds. There is no one type or way in our
              diverse community.Come as you are!
            </p>
          </div>
          <div className="containerH-3-a-1">
            <img className="pic" src="Images\Home\fun.png" alt="Image" />
            <h2>FUN</h2>
            <p>
              We know serious fitness is hard, but look-forward-to-your-workouts
              party.
            </p>
          </div>
        </div>
      </div>

      <div className="containerH-4">
        <img
          className="containerH-4-a"
          src="Images\Home\nutrition.jpg"
          alt="Image"
        />
        <div className="containerH-4-b">
          <Link to="/nutrition">Nutrition Diet Plans</Link>
        </div>
      </div>
      <div style={{ height: "20px" }}></div>
      <div className="containerH-5">
        <div className="containerH-5-a">
          <Link to="/blog">Latest Blogs</Link>
        </div>
        <img className="containerH-5-b" src="Images\Home\blog.jpg" />
      </div>

      <div className="containerH-6">
        <h2 className="gallery">Gallery</h2>
        <div className="containerH-6-a">
          <div
            className="grid-cover row-2"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1595078475328-1ab05d0a6a0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80)",
            }}
          ></div>
          <div
            className="grid-cover col-2"
            style={{
              backgroundImage:
                "url(https://images.pexels.com/photos/3253501/pexels-photo-3253501.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
            }}
          ></div>
          <div
            className="grid-cover"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1596357395217-80de13130e92?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80)",
            }}
          ></div>
          <div
            className="grid-cover row-2"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1580261450046-d0a30080dc9b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=409&q=80)",
            }}
          ></div>
          <div
            className="grid-cover col-2"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1570829460005-c840387bb1ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80)",
            }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default Home;
