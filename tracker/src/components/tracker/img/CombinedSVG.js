import * as SVGs from "./svg";
import * as Front from "./FrontMuscles";
import * as Back from "./BackMuscles";
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
        left: "16%",
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
          flex: "1",
          position: "absolute",
        }}
      />
    </div>
  );
};

const BackMusclesSVG = () => {
  return (
    <div
      style={{
        position: "relative",
        width: "40%",
        height: "40%",
        display: "flex",
        left: "16%",
      }}
    >
      <Back.AdductorMagnus
        style={{
          flex: "1",
          position: "absolute",
        }}
      />
       <Back.BicepsFermoris
        style={{
          flex: "1",
          position: "absolute",
        }}
      />
       <Back.Brachioradialis
        style={{
          flex: "1",
          position: "absolute",
        }}
      />
       <Back.Deltoids
        style={{
          flex: "1",
          position: "absolute",
        }}
      />
       <Back.ExtensorCarpiRadialis
        style={{
          flex: "1",
          position: "absolute",
        }}
        />
      
       <Back.ExternalObliques
        style={{
          flex: "1",
          position: "absolute",
        }}
        />
       <Back.FlexorCarpiRadialis
        style={{
          flex: "1",
          position: "absolute",
        }}
        />
       <Back.FlexorCarpiUlnaris
        style={{
          flex: "1",
          position: "absolute",
        }}
        />
       <Back.GastrocnemiusLateralHead
        style={{
          flex: "1",
          position: "absolute",
        }}
        />
       <Back.GastrocnemiusMedialHead
        style={{
          flex: "1",
          position: "absolute",
        }}
        />
       <Back.GluteusMaximus
        style={{
          flex: "1",
          position: "absolute",
        }}
        />
       <Back.GluteusMedius
        style={{
          flex: "1",
          position: "absolute",
        }}
        />
       <Back.Gracilis
        style={{
          flex: "1",
          position: "absolute",
        }}
        />
       <Back.Infraspinatus
        style={{
          flex: "1",
          position: "absolute",
        }}
        />
       <Back.LattisimusDorsi
        style={{
          flex: "1",
          position: "absolute",
        }}
        />
       <Back.LowerTrapezius
        style={{
          flex: "1",
          position: "absolute",
        }}
        />
       <Back.PeroneusLongus
        style={{
          flex: "1",
          position: "absolute",
        }}
        />
       <Back.RhomboidMajor
        style={{
          flex: "1",
          position: "absolute",
        }}
        />
       <Back.Semitendinosus
        style={{
          flex: "1",
          position: "absolute",
        }}
        />
       <Back.SerratusAnterioir
        style={{
          flex: "1",
          position: "absolute",
        }}
        />
       <Back.TensorFascieLatae
        style={{
          flex: "1",
          position: "absolute",
        }}
        />
       <Back.TeresMajor
        style={{
          flex: "1",
          position: "absolute",
        }}
        />
       <Back.ThoracolumbarFascia
        style={{
          flex: "1",
          position: "absolute",
        }}
        />
       <Back.Trapezius
        style={{
          flex: "1",
          position: "absolute",
        }}
        />
        
       <Back.TricepsBrachii
        style={{
          flex: "1",
          position: "absolute",
        }}
      />
    </div>
  );
};

export { FrontMusclesSVG, BackMusclesSVG };
