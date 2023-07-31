import { RoundedBox, ScrollControls, Scroll } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { S } from "./components/S";

function App() {
  return (
    <>
      <color attach={"background"} args={["#7F8F86"]} />
      <ambientLight intensity={1} />
      <spotLight position={[0, 25, 0]} angle={1.3} penumbra={1} castShadow intensity={2} shadow-bias={-0.0001} />
      <ScrollControls pages={4} damping={0.1}>
        <Scroll>
          <S scale="3"/>
        </Scroll>
        <Scroll html style={{ width: "100%" }}>
          <h1
            className="title"
            style={{
              color: "#cdcbca",
              position: "absolute",
              top: `65vh`,
              left: "50%",
              fontSize: "6em",
              transform: `translate(-50%,-50%)`,
            }}
          >
            Thrift E-X-R
          </h1>

          <div className="row" style={{ position: "absolute", top: `132vh` }}>
            <h2>Walk inside an AR room</h2>
            <p style={{ maxWidth: "400px" }}>
              With our AR app, you can scan your room and place the AR portal in
              your room. You can then walk inside the room.
            </p>
            <button>Download the app</button>
          </div>

          <div className="row" style={{ position: "absolute", top: `230vh` }}>
            <div
              className="col"
              style={{ position: "absolute", right: `40px`, width: "540px" }}
            >
              <h2 style={{ maxWidth: "440px" }}>Customize your experience</h2>
              <p style={{ maxWidth: "440px" }}>
                Enter your size in our app and see the clothes which will fit
                you, read their details and buy them in on go.
              </p>
              <button>Download the app</button>
            </div>
          </div>
        </Scroll>
      </ScrollControls>
    </>
  );
}

export default App;
