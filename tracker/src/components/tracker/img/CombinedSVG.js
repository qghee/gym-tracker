import * as SVGs from "./svg";
import * as Front from "./FrontMuscles";
/* const SVGContainer = () => {
    
  }; */

const FrontMusclesSVG = () => {
  return (
    <div
      style={{
        position: "relative",
        width: "70%", 
        height: "70%", 
        display: "flex", 
      }}
    >
      
      <Front.AdductorLongusAndPectineus
        style={{
          flex: "1",
          position: "absolute",
        }}
      />
        <Front.ExternalObliques
          style={{
            flex: "1", 
            position: "absolute", 
            
          }}
        />

      <Front.VastusLateralis
        style={{
          flex: "1",
          position: "absolute", 
        }}
      />
      <Front.BicepsBrachii
        style={{
          flex: "1",
          position: "absolute", 
        }}
      />
      <Front.Brachialis
        style={{
          flex: "1", 
          position: "absolute", 
        }}
      />
      <Front.Brachioradialis
        style={{
          flex: "1",
          position: "absolute",
        }}
      />
       <Front.Deltoids
        style={{
          flex: "1", 
          position: "absolute", 
        }}
      />
      <Front.FlexorCarpiRadialis
        style={{
          flex: "1", 
          position: "absolute",
        }}
      />
      <Front.VastusMedialis
        style={{
          flex: "1",
          position: "absolute", 
        }}
      />
      <Front.TensorFasciaeLatae
        style={{
          flex: "1", 
          position: "absolute", 
        }}
      />

      <Front.SerratusAnterior
        style={{
          flex: "1", 
          position: "absolute", 
        }}
      />
      <Front.Sartorius
        style={{
          flex: "1",
          position: "absolute",
        }}
      />
      <Front.RectusFemoris
        style={{
          flex: "1",
          position: "absolute",
        }}
      />
      


      <Front.Trapezius
        style={{
          flex: "1", // Use flex: 1 to make the SVGs take equal horizontal space
          position: "absolute", // Ensure proper positioning within the parent
        }}
      />

      
      <Front.ExtensorCarpiRadialis
        style={{
          flex: "1", // Use flex: 1 to make the SVGs take equal horizontal space
          position: "absolute", // Ensure proper positioning within the parent
        }}
      />
      
      
      <Front.Gastrocnemius
        style={{
          flex: "1", // Use flex: 1 to make the SVGs take equal horizontal space
          position: "absolute", // Ensure proper positioning within the parent
        }}
      />
      <Front.Omohyoid
        style={{
          flex: "1", // Use flex: 1 to make the SVGs take equal horizontal space
          position: "absolute", // Ensure proper positioning within the parent
        }}
      />
      <Front.PectoralisMajor
        style={{
          flex: "1", // Use flex: 1 to make the SVGs take equal horizontal space
          position: "absolute", // Ensure proper positioning within the parent
        }}
      />
      <Front.PeroneusLongus
        style={{
          flex: "1", // Use flex: 1 to make the SVGs take equal horizontal space
          position: "absolute", // Ensure proper positioning within the parent
        }}
      />
      <Front.RectusAbdominusLower
        style={{
          flex: "1", // Use flex: 1 to make the SVGs take equal horizontal space
          position: "absolute", // Ensure proper positioning within the parent
        }}
      />
      <Front.RectusAbdominus
        style={{
          flex: "1", // Use flex: 1 to make the SVGs take equal horizontal space
          position: "absolute", // Ensure proper positioning within the parent
        }}
      />
     
      
      <Front.Soleus
        style={{
          flex: "1", // Use flex: 1 to make the SVGs take equal horizontal space
          position: "absolute", // Ensure proper positioning within the parent
        }}
      />
      <Front.Sternocleidomastoid
        style={{
          flex: "1", // Use flex: 1 to make the SVGs take equal horizontal space
          position: "absolute", // Ensure proper positioning within the parent
        }}
      />
    <Front.TricepsLongHead
        style={{
          flex: "1", // Use flex: 1 to make the SVGs take equal horizontal space
          position: "absolute", // Ensure proper positioning within the parent
        }}
     />
    <Front.TricepsMedialHead
        style={{
          flex: "1", // Use flex: 1 to make the SVGs take equal horizontal space
          position: "absolute", // Ensure proper positioning within the parent
        }}
     />
    </div> 
  );
};

export { FrontMusclesSVG };
