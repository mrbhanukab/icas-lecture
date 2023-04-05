import Particles from "react-tsparticles";

const Background = () => {
  const particlesInit = (main) => {
  };

  const particlesLoaded = (container) => {
  };
  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: "##14253000",
          },
          position: "50% 50%",
          repeat: "no-repeat",
          size: "20%",
        },
        fullScreen: {
          zIndex: 1,
        },
        interactivity: {
          events: {
            onClick: {
              mode: "repulse",
            },
            onHover: {
              enable: false,
              mode: "bubble",
            },
          },
          modes: {
            bubble: {
              distance: 250,
              duration: 2,
              opacity: 0,
              size: 0,
            },
            grab: {
              distance: 400,
            },
            repulse: {
              distance: 400,
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            color: {
              value: "#ffffff",
            },
            distance: 150,
            opacity: 0.4,
          },
          move: {
            attract: {
              rotate: {
                x: 600,
                y: 600,
              },
            },
            enable: true,
            path: {},
            outModes: {
              bottom: "out",
              left: "out",
              right: "out",
              top: "out",
            },
            random: true,
            speed: 1,
            spin: {},
          },
          number: {
            density: {
              enable: true,
            },
            value: 160,
          },
          opacity: {
            random: {
              enable: true,
            },
            value: {
              min: 0,
              max: 1,
            },
            animation: {
              enable: true,
              speed: 1,
              minimumValue: 0,
            },
          },
          size: {
            random: {
              enable: true,
            },
            value: {
              min: 1,
              max: 3,
            },
            animation: {
              speed: 4,
              minimumValue: 0.3,
            },
          },
        },
      }}
    />
  );
};


export default Background;