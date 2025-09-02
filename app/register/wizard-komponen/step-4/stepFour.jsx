export default function StepFour({ formData, handleChange, prevStep }) {
  return (
    <>
                        <div className="w-1/2 mb-4" id="first-input">
                            <label
                              htmlFor="jenjang_pendidikan"
                              className="
                                block
                                mb-2
                                text-sm font-medium text-gray-900
                                dark:text-white
                                md:text-base
                              "
                            >Pendidikan</label>
                            <input 
                              type="text" 
                              value={formData.jenjang_pendidikan}
                              onChange={handleChange}
                              id="jenjang_pendidikan"
                              name="jenjang_pendidikan"
                              className={
                                "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg " +
                                "block w-29/30 p-2 transition-all duration-300 ease-in-out " +
                                "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 " +
                                "focus:shadow-md focus:scale-105 " +
                                "dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 " +
                                "dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              }
                              placeholder="Jenjang Pendidikan" />
                        </div>
                        <div className="w-1/2 mb-4" id="second-input">
                            <label
                              htmlFor="tanggal_berdiri"
                              className="
                                block
                                mb-2
                                text-sm font-medium text-gray-900
                                dark:text-white
                                md:text-base
                              "
                            >Tanggal</label>
                            <input 
                              type="text" 
                              id="tanggal_berdiri"
                              name="tanggal_berdiri"
                              value={formData.tanggal_berdiri}
                              onChange={handleChange}
                              className={
                                "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg " +
                                "block w-full p-2 transition-all duration-300 ease-in-out " +
                                "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 " +
                                "focus:shadow-md focus:scale-105 " +
                                "dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 " +
                                "dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              }
                              placeholder="Tanggal berdiri"/>
                        </div>
                        <div className="w-full mb-4" id="third-input">
                            <label
                              htmlFor="nama_pimpinan"
                              className="
                                block
                                mb-2
                                text-sm font-medium text-gray-900
                                dark:text-white
                                md:text-base
                              "
                            >Nama Pimpinan</label>
                            <input 
                              type="text" 
                              value={formData.nama_pimpinan}
                              onChange={handleChange}
                              className={
                                "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg " +
                                "block w-full p-2 transition-all duration-300 ease-in-out " +
                                "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 " +
                                "focus:shadow-md focus:scale-105 " +
                                "dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 " +
                                "dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              }
                              id="nama_pimpinan"
                              name="nama_pimpinan"
                              placeholder="nama pimpinan" />
                        </div>
                        <div className="w-full mb-4" id="fourth-input">
                            <label
                              htmlFor="nomor_hp_pimpinan"
                              className="
                                block
                                mb-2
                                text-sm font-medium text-gray-900
                                dark:text-white
                                md:text-base
                              "
                            >Nomor HP Pimpinan</label>
                            <input 
                              type="text" 
                              id="nomor_hp_pimpinan"
                              name="nomor_hp_pimpinan"
                              value={formData.nomor_hp_pimpinan}
                              onChange={handleChange}
                              className={
                                "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg " +
                                "block w-full p-2 transition-all duration-300 ease-in-out " +
                                "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 " +
                                "focus:shadow-md focus:scale-105 " +
                                "dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 " +
                                "dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              }
                              placeholder="nomor hp pimpinan" />
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
                              type="submit"
                              className="
                                px-4 md:px-6 py-2.5
                                text-white font-medium text-sm text-center
                                bg-gradient-to-br from-green-400 to-blue-600
                                rounded-lg
                                transition-all
                                hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg
                              "
                            >Submit</button>
                        </div>
    </>
  )
}
