export default function StepThree({ formData, prevStep }) {
  return (
    <div>
      <h3>Step 3: Konfirmasi</h3>
      <p><strong>Nama:</strong> {formData.name}</p>
      <p><strong>Email:</strong> {formData.email}</p>
      <p><strong>Usia:</strong> {formData.age}</p>
      <p><strong>Bio:</strong> {formData.bio}</p>
      <button onClick={prevStep}>Kembali</button>
      <button onClick={() => alert('Data dikirim!')}>Submit</button>
    </div>
  );
}
