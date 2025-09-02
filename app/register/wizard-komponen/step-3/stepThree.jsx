export default function StepThree({ formData, handleChange, nextStep, prevStep }) {
    return (
    <>
                        <div className="w-full mb-4" id="first-input">
                            <label
                              htmlFor="kabkota_id"
                            
                              className="
                                block
                                mb-2
                                text-sm font-medium text-gray-900
                                dark:text-white
                                md:text-base
                              "
                            >Kabupaten Kota</label>
                            <input 
                              type="text" 
                              id="kabkota_id"
                              name="kabkota_id"
                              value={formData.kabkota_id}
                              onChange={handleChange}
                              className={
                                "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg " +
                                "block w-full p-2 transition-all duration-300 ease-in-out " +
                                "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 " +
                                "focus:shadow-md focus:scale-105 " +
                                "dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 " +
                                "dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              }
                              placeholder="Input kabupaten kota" />
                        </div>
                        <div className="w-full mb-4" id="second-input">
                            <label
                              htmlFor="kecamatan_id"
                              className="
                                block
                                mb-2
                                text-sm font-medium text-gray-900
                                dark:text-white
                                md:text-base
                              "
                            >Kecamatan</label>
                            <input 
                              type="text" 
                              value={formData.kecamatan_id}
                              onChange={handleChange}
                              className={
                                "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg " +
                                "block w-full p-2 transition-all duration-300 ease-in-out " +
                                "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 " +
                                "focus:shadow-md focus:scale-105 " +
                                "dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 " +
                                "dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              }
                              placeholder="Input kecamatan" 
                              id="kecamatan_id"
                              name="kecamatan_id"/>
                        </div>
                        <div className="w-full mb-4" id="third-input">
                            <label
                              htmlFor="tipe_lembaga"
                              className="
                                block
                                mb-2
                                text-sm font-medium text-gray-900
                                dark:text-white
                                md:text-base
                              "
                            >Lembaga</label>
                            <input 
                              type="text" 
                              id="tipe_lembaga"
                              name="tipe_lembaga"
                              value={formData.tipe_lembaga}
                              onChange={handleChange}
                              className={
                                "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg " +
                                "block w-full p-2 transition-all duration-300 ease-in-out " +
                                "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 " +
                                "focus:shadow-md focus:scale-105 " +
                                "dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 " +
                                "dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              }
                              placeholder="Input tipe lembaga" />
                        </div>
                        <div id="prev-next" className="flex justify-between items-center flex-grow">
                            <button
                              type="button"
                              onClick={prevStep}
                              className="
                                px-4 md:px-6 py-2.5
                                text-white font-medium text-sm text-center
                                bg-gradient-to-r from-cyan-500 to-blue-500
                                rounded-lg
                                transition-all
                                hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 me-2 duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg
                              "
                            >Prev</button>
                            <button
                              type="button"
                              onClick={nextStep}
                              className="
                                px-4 md:px-6 py-2.5
                                text-white font-medium text-sm text-center
                                bg-gradient-to-br from-green-400 to-blue-600
                                rounded-lg
                                transition-all
                                hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg
                              "
                            >Next</button>
                        </div>
    </>
    );
}