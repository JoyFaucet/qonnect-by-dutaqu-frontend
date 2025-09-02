export default function StepTwo({ formData, handleChange, nextStep, prevStep }) {
  return (
    <div>
      <h3>Step 2: Detail Tambahan</h3>
      <input name="age" placeholder="Usia" value={formData.age} onChange={handleChange} />
      <br />
      <textarea name="bio" placeholder="Tentang Anda" value={formData.bio} onChange={handleChange} />
      <br />
      <button onClick={prevStep}>Kembali</button>
      <button onClick={nextStep}>Lanjut</button>
    </div>
  );
}
