export default function StepOne({ formData, handleChange, nextStep }) {
  return (
    <div>
      <h3>Step 1: Info Dasar</h3>
      <input name="name" placeholder="Nama" value={formData.name} onChange={handleChange} />
      <br />
      <input name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
      <br />
      <button onClick={nextStep}>Lanjut</button>
    </div>
  );
}
