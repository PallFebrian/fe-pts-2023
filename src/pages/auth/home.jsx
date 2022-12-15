import React from 'react';
import CustomButton from '../../komponent/CustomButton';
import CustomInput from '../../komponent/CustomInput';
import { useNavigate } from 'react-router-dom';
import CustomCard from '../../komponent/CustomCard';
import { useSelector } from 'react-redux';
import { GetProduct } from '../../API/produk';
import { MdAccountCircle } from 'react-icons/md';
import { SlBasket } from 'react-icons/sl';
import Keranjang from './keranjang';
// import { useSelector } from 'react-redux';

export default function Home() {
  let navigate = useNavigate();
  // let [status, setStatus] = React.useState(false);
  const author = useSelector((state) => state.auth);
  const name = useSelector((state) => state.auth.name);
  const email = useSelector((state) => state.auth.email);

  // const name = useSelector((state)=>state.authproses.name)
  // const email = useSelector((state)=>state.authproses.email)
  // const navigate = useNavigate();

  const [listProduct, setListProduct] = React.useState([]);
  const [payload, setPayload] = React.useState({
    kategori: '',
    keyword: '',
    hargaTerendah: '',
    hargaTertinggi: '',
  });
  const [fetchProduct, setFetchProduct] = React.useState(false);

  const handleChange = (e) => {
    setPayload((payload) => {
      return {
        ...payload,
        [e.target.name]: e.target.value,
      };
    });
  };

  const getProduct = async (e) => {
    // e.preventDefault()
    try {
      setFetchProduct(true);
      const response = await GetProduct(
        payload.kategori,
        payload.keyword,
        payload.hargaTerendah,
        payload.hargaTertinggi
      );
      console.log('response =>', response);
      console.log('product =>', response.data.data.rows);
      setListProduct(response.data.data.rows);
      // setPayload(response.data.data.rows)
    } catch (err) {
      console.log('err =>', err);
    } finally {
      setFetchProduct(false);
    }
  };
  React.useEffect(() => {
    getProduct();
  }, [
    payload.kategori,
    payload.hargaTerendah,
    payload.hargaTertinggi,
    payload.keyword,
  ]);

  console.log('listProduct =>', listProduct);
  console.log('payload =>', payload);
  return (
    <React.Fragment>
      <div className="w-screen h-screen bg-[#4b5ae2] flex-col">
        <div className=" bg-[#899988] h-[8%] w-screen p-2 ">
          <section className="justify-end mr-10 flex">
            <input
              name="keyword"
              type="text"
              className="w-[500px] h-10 p-2 rounded-md mr-[30%] border-b-2 border-[#d6e5d5] bg-[#899988] text-[#d6e5d5]  focus:outline-none "
              placeholder="Cari barang"
              color="#D6D5D5"
              onChange={handleChange}
              value={payload.keyword}
            />

            <SlBasket
              size="30px"
              color="#D6E6D5"
              className="mt-1 mr-8"
              onClick={() => {
                return navigate('/keranjang');
              }}
            />
            <div className='text-[#d6e6d5] ml-2'>
              <p className='flex justify-end'>{name}</p>
              <p>{email}</p>
            </div>
            <MdAccountCircle size="40px" color="#D6E6D5" />
          </section>
        </div>
        <div className="w-full h-[92%] flex">
          <div className="bg-[#D6E6D5] h-full w-[20%]">
            <div className="mt-8 ml-5">
              <div className="m-5 space-y-2">
                <select
                  className="w-[150px] h-[40px]  border-[#899988] rounded text-[#899988] bg-[#D6E6D5] text-center transition-all ease-in-out bg-transparent`"
                  value={payload.kategori}
                  name="kategori"
                  onChange={handleChange}
                >
                  <option value={''}>kategori</option>
                  <option value="handphone">hanphone</option>
                  <option value="motor">motor</option>
                  <option value="mobil">mobil</option>
                  <option value="sepatu">sepatu</option>
                  <option value="tas">tas</option>
                  <option value="televisi">televisi</option>
                </select>

                <input
                  type="number"
                  placeholder="HargaTertinggi"
                  value={payload.hargaTertinggi}
                  onChange={handleChange}
                  className="w-[155px] border p-3 border-[#899988] rounded text-[#899988] bg-[#D6E6D5] text-center transition-all ease-in-out bg-transparent`"
                  name="hargaTertinggi"
                />

                <input
                  type="number"
                  placeholder="HargaTerendah"
                  value={payload.hargaTerendah}
                  onChange={handleChange}
                  className="w-[155px] border p-3 border-[#899988] rounded text-[#899988] bg-[#D6E6D5] text-center transition-all ease-in-out bg-transparent`"
                  name="hargaTerendah"
                />
                <button
                  className="w-[155px] border p-3 border-[#899988] rounded text-[#899988] bg-[#D6E6D5] text-center transition-all ease-in-out bg-transparent`"
                  onClick={() => {
                    return setPayload({
                      kategori: '',
                      keyword: '',
                      hargaTertinggi: '',
                      hargaTerendah: '',
                    });
                  }}
                >
                  Reset Filter
                </button>
              </div>
            </div>
          </div>
          <div className="bg-[#F9FCF8] h-full w-[80%] overflow-scroll">
            <section className="mt-10 ml-10 grid grid-cols-4 gap-y-7">
              {listProduct.length === 0 ? (
                <div className="w-screen h-[200px] text-[40px] text-[#899988] font-semibold ">
                  <h1 className="mt-[15%] ml-[10%]">
                    Maaf barang yang anda cari tidak tersedia :(
                  </h1>
                </div>
              ) : (
                listProduct?.map((item, index) => {
                  const poto = item.gambarProduk;
                  const gambar = JSON.parse(poto);
                  //require library
                  const convertRupiah = require('rupiah-format');

                  //convert number
                  let number = item.harga;
                  let rupiah = convertRupiah.convert(number);

                  return (
                    <button
                      onClick={() => {
                        return navigate(`/produk/detailProduk/${item.uuid}`);
                      }}
                    >
                      <CustomCard
                        gambarProduk={
                          <img
                            src={gambar[0].gambar1}
                            alt="gambar"
                            // className="ml-6 mt-5 mr-2 h-[70px] w-[150px] "
                            className="w-full h-full"
                          />
                        }
                        namaProduk={item.namaProduk}
                        kategori={item.kategori}
                        harga={rupiah}
                        stok={item.stok}
                        rating={item.rating}
                      />
                    </button>
                  );
                })
              )}
            </section>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
