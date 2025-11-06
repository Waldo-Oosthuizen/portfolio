import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import db from "../firebase";

export default function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [wateringFrequency, setWateringFrequency] = useState("Daily"); // Dropdown for watering frequency

  async function handleSubmit(e) {
    e.preventDefault();

    if (!description || !wateringFrequency) return;

    // Calculate the next watering date based on the selected frequency
    const now = new Date();
    let nextWateringDate;

    switch (wateringFrequency) {
      case "Daily":
        nextWateringDate = new Date(now.setDate(now.getDate() + 1));
        break;
      case "Every 3 days":
        nextWateringDate = new Date(now.setDate(now.getDate() + 3));
        break;
      case "Weekly":
        nextWateringDate = new Date(now.setDate(now.getDate() + 7));
        break;
      default:
        nextWateringDate = now;
    }

    const newItem = {
      description,
      quantity,
      watered: false,
      wateringFrequency, // Store the watering frequency
      nextWateringDate: nextWateringDate.toISOString(), // Store the next watering date as ISO string
    };

    try {
      const docRef = await addDoc(collection(db, "plants"), newItem);
      const newItemWithId = { ...newItem, id: docRef.id };

      console.log("Plant added to Firebase with ID:", newItemWithId.id);
      onAddItems(newItemWithId);

      setDescription("");
      setQuantity(1);
      setWateringFrequency("Daily"); // Reset watering frequency
    } catch (error) {
      console.error("Error adding plant to Firebase:", error);
    }
  }

  return (
    <form
      className="p-5 flex flex-col md:flex-row gap-2 md:gap-9 justify-center"
      style={{
        background:
          "linear-gradient(49deg, rgba(155,209,218,1) 20%, rgba(134,42,132,1) 100%)",
      }}
      onSubmit={handleSubmit}>
      <p className="text-white text-center text-3xl align-center">Add Plant:</p>
      <div className="text-center items-center">
        <select
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          className="mr-2 rounded-sm bg-transparent text-white p-1 border cursor-pointer hover:bg-white hover:text-black">
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
            <option value={num} key={num} className="text-black cursor-pointer">
              {num}
            </option>
          ))}
        </select>
        <input
          type="text"
          className="p-1"
          value={description}
          placeholder="Plant Name"
          onChange={(e) => setDescription(e.target.value)}
        />
        <select
          value={wateringFrequency}
          onChange={(e) => setWateringFrequency(e.target.value)}
          className="p-1">
          <option value="Daily">Daily</option>
          <option value="Every 3 days">Every 3 days</option>
          <option value="Weekly">Weekly</option>
        </select>
        <button className="text-LightGray border border-LightGray p-1 ml-1 rounded-sm hover:bg-LightGray hover:text-white">
          Add
        </button>
      </div>
    </form>
  );
}
