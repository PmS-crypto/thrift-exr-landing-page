import { ScrollControls, Scroll, Environment, Sparkles } from "@react-three/drei";
import { S } from "./components/S";
import { L } from "./components/L";

function App() {


  return (
    <>
      {/* <color attach={"background"} args={["#0AB1A2","#000000"]} /> */}
      <ambientLight intensity={1} />
      <spotLight position={[0, 25, 0]} angle={1.3} penumbra={1} castShadow intensity={2} shadow-bias={-0.0001} />
      <Environment preset="forest" />
      <ScrollControls pages={3} damping={0.1}>
        <S scale="3" position={[0, -4.9, 3]} opacity="0.0"/>
        <L scale="3" position={[0, -4.9, -30]}/>
        <Sparkles size={2} color={"#fff"} scale={[10, 10, 10]}></Sparkles>

        <Scroll>
        </Scroll>
        <Scroll html style={{ width: "100%" }}>
          <h1
            className="title"
            style={{
              // color: "#cdcbca",
              position: "absolute",
              top: `36vh`,
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
