"use client"

import Image from "next/image"
import producToi from "public/assets/images/Product_Toi.jpg"
import producToi2 from "public/assets/images/Product_Toi-2.jpg"
import productNuHoa from "public/assets/images/Product_NuHoa.jpg"
import productNuHoa2 from "public/assets/images/Product_NuHoa-2.jpg"
import productNuHoa3 from "public/assets/images/Product_NuHoa-3.jpg"
import productNuHoa4 from "public/assets/images/Product_NuHoa-4.jpg"
import productTuong from "public/assets/images/Product_Tuong.jpg"
import productTuong2 from "public/assets/images/Product_Tuong-2.jpg"
import productTuong3 from "public/assets/images/Product_Tuong-3.jpg"
import productTuong4 from "public/assets/images/Product_Tuong-4.jpg"
import "./styles.scss"
import {useEffect, useState} from "react"

const ProductDetail = ({params}) => {
  const [selectImg, setSelectImg] = useState("")

  const products = [
    {
      id: 1,
      detail: "Hành Tỏi Liên Chung",
      price: "60.000đ",
      shortDesc: (
        <div>
          <span>
            Tại x&atilde; Li&ecirc;n Chung &ndash; nơi c&oacute; truyền
            thống&nbsp;
            <a href='http://www.tintucnongnghiep.com/'>trồng h&agrave;nh tỏi</a>
            &nbsp;từ h&agrave;ng trăm năm qua, vụ đ&ocirc;ng n&agrave;y
            b&agrave; con n&ocirc;ng d&acirc;n trồng 64 ha h&agrave;nh tỏi, tăng
            12 ha so với năm 2012 (h&agrave;nh l&agrave; ch&iacute;nh, tỏi trồng
            xen). Năng suất h&agrave;nh đạt từ 4,5 - 5 tạ/s&agrave;o, cao hơn vụ
            h&agrave;nh năm 2012 từ 1 - 1,5 tạ. Gi&aacute; h&agrave;nh mua tại
            ruộng l&agrave; 15.000 đồng/kg (đầu vụ 18.000 đồng/kg), trừ chi
            ph&iacute;, 1 s&agrave;o h&agrave;nh cho thu nhập b&igrave;nh
            qu&acirc;n tr&ecirc;n 6 triệu đồng.
          </span>
        </div>
      ),
      description: (
        <>
          <div>
            <span>
              Tại x&atilde; Li&ecirc;n Chung &ndash; nơi c&oacute; truyền
              thống&nbsp;
              <a href='http://www.tintucnongnghiep.com/'>
                trồng h&agrave;nh tỏi
              </a>
              &nbsp;từ h&agrave;ng trăm năm qua, vụ đ&ocirc;ng n&agrave;y
              b&agrave; con n&ocirc;ng d&acirc;n trồng 64 ha h&agrave;nh tỏi,
              tăng 12 ha so với năm 2012 (h&agrave;nh l&agrave; ch&iacute;nh,
              tỏi trồng xen). Năng suất h&agrave;nh đạt từ 4,5 - 5
              tạ/s&agrave;o, cao hơn vụ h&agrave;nh năm 2012 từ 1 - 1,5 tạ.
              Gi&aacute; h&agrave;nh mua tại ruộng l&agrave; 15.000 đồng/kg (đầu
              vụ 18.000 đồng/kg), trừ chi ph&iacute;, 1 s&agrave;o h&agrave;nh
              cho thu nhập b&igrave;nh qu&acirc;n tr&ecirc;n 6 triệu đồng.
            </span>
          </div>
          <div>
            <span>&nbsp;</span>
          </div>
          <div>
            <span>
              Tr&ecirc;n địa b&agrave;n huyện T&acirc;n Y&ecirc;n, ngo&agrave;i
              Li&ecirc;n Chung c&ograve;n c&oacute; c&aacute;c x&atilde; Việt
              Lập, Quế Nham đang ph&aacute;t triển mạnh c&acirc;y h&agrave;nh
              tỏi. Vụ đ&ocirc;ng 2013, diện t&iacute;ch h&agrave;nh tỏi
              T&acirc;n Y&ecirc;n tr&ecirc;n 145ha, trong đ&oacute;: Li&ecirc;n
              Chung 64ha, Quế Nham 52ha, Việt Lập 26,5ha, c&ograve;n lại
              l&agrave; x&atilde; Hợp Đức.
            </span>
          </div>
          <div>
            <span>&nbsp;</span>
          </div>
          <div>
            <span>
              H&agrave;nh ở T&acirc;n Y&ecirc;n thường c&oacute; m&agrave;u
              t&iacute;a, củ to v&agrave; thơm đậm rất dễ ph&acirc;n biệt với
              những giống h&agrave;nh trồng ở nơi kh&aacute;c. Thời vụ trồng
              h&agrave;nh vụ m&ugrave;a, bắt đầu từ th&aacute;ng 9 v&agrave; thu
              hoạch trong dịp cuối năm, kịp b&aacute;n trong dịp tết.
            </span>
          </div>
        </>
      ),
      images: [
        {
          id: 1,
          img: producToi,
        },
        {
          id: 2,
          img: producToi2,
        },
      ],
    },

    {
      id: 2,
      detail: "Nụ hoa Sâm Nam Núi Dành",
      price: "1.200.000đ",
      shortDesc: (
        <>
          <p dir='ltr'>
            <span>
              Hai c&acirc;u n&oacute;i về điển t&iacute;ch về một loại thần dược
              chữa khỏi bệnh l&ograve;a mắt cho mẹ Vua Tự Đức triều Nguyễn
              v&agrave; cũng từ đ&oacute; S&acirc;m nam n&uacute;i D&agrave;nh
              đ&atilde; trở th&agrave;nh một trong c&aacute;c sản vật qu&yacute;
              tiến vua như một lời khẳng định v&agrave; sự ghi nhận về chất
              lượng, c&ocirc;ng dụng của n&oacute;. Song &iacute;t ai biết rằng
              c&acirc;y s&acirc;m nam n&uacute;i D&agrave;nh b&ecirc;n cạnh việc
              khai th&aacute;c củ th&igrave; những năm gần đ&acirc;y c&ograve;n
              c&oacute; một sản vật kh&aacute;c nổi tiếng kh&ocirc;ng k&eacute;m
              đ&oacute; l&agrave; Nụ hoa s&acirc;m nam n&uacute;i D&agrave;nh.
            </span>
          </p>
          <br />
          <p dir='ltr'>
            <span>
              Nụ hoa s&acirc;m nam n&uacute;i D&agrave;nh chỉ được khai
              th&aacute;c từ những c&acirc;y s&acirc;m nam c&oacute; độ tuổi từ
              2 năm trở l&ecirc;n khi đ&oacute; nụ hoa s&acirc;m nam mới đạt
              được h&agrave;m lượng hoạt chất c&oacute; lợi nhiều nhất như thể
              chắt lọc, hội tụ những tinh t&uacute;y đất trời Chung Sơn qua từng
              nụ hoa b&eacute; nhỏ.
            </span>
          </p>
        </>
      ),
      description: (
        <>
          <p dir='ltr'>
            <span>NỤ HOA S&Acirc;M NAM N&Uacute;I D&Agrave;NH</span>
          </p>
          <br />
          <p dir='ltr'>
            <span>
              &ldquo;Qu&agrave; tặng v&ocirc; gi&aacute; từ đất
              thi&ecirc;ng&rdquo;
            </span>
          </p>
          <br />

          <p dir='ltr'>
            <span>
              N&oacute;i đến S&acirc;m nam N&uacute;i D&agrave;nh l&agrave;
              n&oacute;i về một sản vật độc nhất v&ocirc; nhị của quần thể
              n&uacute;i D&agrave;nh thuộc địa phận x&atilde; Việt Lập,
              Li&ecirc;n Chung huyện T&acirc;n Y&ecirc;n. Từ l&acirc;u lắm trong
              nh&acirc;n gian đ&atilde; truyền tụng c&acirc;u n&oacute;i:
            </span>
          </p>
          <br />

          <p dir='ltr'>
            <span>&ldquo;S&acirc;m Nam nổi tiếng n&uacute;i D&agrave;nh</span>
          </p>
          <br />

          <p dir='ltr'>
            <span>Chữa lo&agrave; cho mắt lại l&agrave;nh như xưa&rdquo;</span>
          </p>
          <br />

          <p dir='ltr'>
            <span>
              Hai c&acirc;u n&oacute;i về điển t&iacute;ch về một loại thần dược
              chữa khỏi bệnh l&ograve;a mắt cho mẹ Vua Tự Đức triều Nguyễn
              v&agrave; cũng từ đ&oacute; S&acirc;m nam n&uacute;i D&agrave;nh
              đ&atilde; trở th&agrave;nh một trong c&aacute;c sản vật qu&yacute;
              tiến vua như một lời khẳng định v&agrave; sự ghi nhận về chất
              lượng, c&ocirc;ng dụng của n&oacute;. Song &iacute;t ai biết rằng
              c&acirc;y s&acirc;m nam n&uacute;i D&agrave;nh b&ecirc;n cạnh việc
              khai th&aacute;c củ th&igrave; những năm gần đ&acirc;y c&ograve;n
              c&oacute; một sản vật kh&aacute;c nổi tiếng kh&ocirc;ng k&eacute;m
              đ&oacute; l&agrave; Nụ hoa s&acirc;m nam n&uacute;i D&agrave;nh.
            </span>
          </p>
          <br />

          <p dir='ltr'>
            <span>
              Nụ hoa s&acirc;m nam n&uacute;i D&agrave;nh chỉ được khai
              th&aacute;c từ những c&acirc;y s&acirc;m nam c&oacute; độ tuổi từ
              2 năm trở l&ecirc;n khi đ&oacute; nụ hoa s&acirc;m nam mới đạt
              được h&agrave;m lượng hoạt chất c&oacute; lợi nhiều nhất như thể
              chắt lọc, hội tụ những tinh t&uacute;y đất trời Chung Sơn qua từng
              nụ hoa b&eacute; nhỏ.
            </span>
          </p>
          <br />

          <p dir='ltr'>
            <span>
              Đứng trước nhu cầu thị trường v&agrave; cơ hội ph&aacute;t triển
              của một sản phẩm nhiều triển vọng n&agrave;y HTX SX v&agrave; TT
              S&acirc;m Nam n&uacute;i D&agrave;nh Li&ecirc;n Chung đ&atilde;
              nghi&ecirc;n cứu, ph&aacute;t triển thương hiệu &ldquo;Nụ hoa
              s&acirc;m nam n&uacute;i D&agrave;nh&rdquo; như một bước
              ph&aacute;t triển đa dạng v&agrave; n&acirc;ng tầm gi&aacute; trị
              c&aacute;c sản phẩm từ c&acirc;y s&acirc;m nam n&uacute;i
              D&agrave;nh.
            </span>
          </p>
          <br />

          <p dir='ltr'>
            <span>
              &ldquo;Nụ hoa s&acirc;m nam n&uacute;i D&agrave;nh&rdquo; được chế
              biến từ những nụ hoa s&acirc;m nam khu vực n&uacute;i D&agrave;nh
              Li&ecirc;n Chung do người d&acirc;n thu h&aacute;i theo phương
              ph&aacute;p thủ c&ocirc;ng v&agrave;o s&aacute;ng sớm khi
              b&ocirc;ng hoa vẫn c&ograve;n h&agrave;m tiếu l&agrave; l&uacute;c
              hoa cho chất lượng tốt nhất (khi nắng l&ecirc;n hoa tung phấn
              l&agrave;m giảm chất lượng của hoa) v&agrave; chế biến bằng sao
              nhiệt truyền thống ngay khi hoa c&ograve;n ướt đẫm sương mai. Dưới
              b&agrave;n tay cần mẫn của người thợ sao hoa với nhiều c&ocirc;ng
              đoạn tỉ mỉ, cầu k&igrave; cho ra sản phẩm &ldquo;Nụ hoa s&acirc;m
              nam n&uacute;i D&agrave;nh&rdquo; kh&ocirc; m&agrave;u v&agrave;ng
              c&aacute;nh gi&aacute;n, nụ hoa gi&ograve;n rụm nhưng vẫn giữ
              nguy&ecirc;n h&igrave;nh d&aacute;ng ban đầu, mang theo cả hương
              vị m&aacute;t l&agrave;nh, ngọt thơm từ mật hoa v&agrave;
              h&agrave;m lượng saponin ho&agrave;n hảo đặc biệt tốt cho sức khỏe
              con người.
            </span>
          </p>
          <br />

          <p dir='ltr'>
            <span>
              Mỗi khi nh&acirc;m nhi 1 ngụm tr&agrave; &ldquo;Nụ hoa s&acirc;m
              nam n&uacute;i D&agrave;nh&rdquo; thực kh&aacute;ch sẽ cảm nhận
              thấy hương thơm tinh khiết, vị ngọt m&aacute;t kh&ocirc;ng thể
              n&agrave;o qu&ecirc;n của v&ugrave;ng n&uacute;i đồi Chung Sơn
              linh thi&ecirc;ng, huyền b&iacute;,.. hội tụ trong những
              c&aacute;nh hoa tuyệt diệu của một sản vật qu&yacute; với sức khỏe
              con người m&agrave; tạo h&oacute;a đ&atilde; ưu &aacute;i
              d&agrave;nh tặng nơi đ&acirc;y./.
            </span>
          </p>
          <br />

          <p>
            <span>&nbsp;</span>
          </p>
          <br />

          <div style={{textAlign: "center"}}>
            <iframe
              loading='lazy'
              title='Sâm Núi Dành: Báu Vật Của Vùng Đất Bắc Giang | SKĐS'
              src='https://www.youtube.com/embed/F16EpNbCTp0?feature=oembed'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              allowFullScreen=''
              width='1020'
              height='574'
              frameBorder='0'></iframe>
          </div>
        </>
      ),
      images: [
        {
          id: 1,
          img: productNuHoa,
        },
        {
          id: 2,
          img: productNuHoa2,
        },
        {
          id: 3,
          img: productNuHoa3,
        },
        {
          id: 4,
          img: productNuHoa4,
        },
      ],
    },

    {
      id: 3,
      detail: "Tương Liên Chung",
      price: "20.000đ",
      shortDesc: (
        <p dir='ltr'>
          <span>
            X&atilde; Li&ecirc;n Chung, huyện T&acirc;n Y&ecirc;n l&agrave; một
            v&ugrave;ng qu&ecirc; thanh b&igrave;nh được che chở bởi d&atilde;y
            n&uacute;i D&agrave;nh linh thi&ecirc;ng h&ugrave;ng vĩ, con
            s&ocirc;ng Thương thơ mộng lượn quanh. Nơi đ&acirc;y c&oacute; nhiều
            sản vật qu&yacute; như S&acirc;m nam n&uacute;i D&agrave;nh nổi danh
            sử s&aacute;ch, nem nướng Li&ecirc;n Chung nức tiếng gần xa,
            h&agrave;nh, tỏi truyền thống địa phương&hellip; V&agrave; một đặc
            sản kh&ocirc;ng thể kh&ocirc;ng nhắc đến khi n&oacute;i về
            Li&ecirc;n Chung đ&oacute; l&agrave; &ldquo;tương Li&ecirc;n
            Chung&rdquo;.
          </span>
        </p>
      ),
      description: (
        <>
          <p dir='ltr'>
            <span>TƯƠNG LI&Ecirc;N CHUNG</span>
          </p>
          <br />
          <p dir='ltr'>
            <span>&ldquo; Vị ngọt qu&ecirc; hương&rdquo;</span>
          </p>
          <br />
          <p dir='ltr'>
            <span>
              X&atilde; Li&ecirc;n Chung, huyện T&acirc;n Y&ecirc;n l&agrave;
              một v&ugrave;ng qu&ecirc; thanh b&igrave;nh được che chở bởi
              d&atilde;y n&uacute;i D&agrave;nh linh thi&ecirc;ng h&ugrave;ng
              vĩ, con s&ocirc;ng Thương thơ mộng lượn quanh. Nơi đ&acirc;y
              c&oacute; nhiều sản vật qu&yacute; như S&acirc;m nam n&uacute;i
              D&agrave;nh nổi danh sử s&aacute;ch, nem nướng Li&ecirc;n Chung
              nức tiếng gần xa, h&agrave;nh, tỏi truyền thống địa phương&hellip;
              V&agrave; một đặc sản kh&ocirc;ng thể kh&ocirc;ng nhắc đến khi
              n&oacute;i về Li&ecirc;n Chung đ&oacute; l&agrave; &ldquo;tương
              Li&ecirc;n Chung&rdquo;.
            </span>
          </p>
          <br />
          <p dir='ltr'>
            <span>
              &ldquo;Tương Li&ecirc;n Chung&rdquo; l&agrave; một m&oacute;n nước
              chấm truyền thống gắn liền với đặc trưng v&ugrave;ng miền
              v&agrave; cuộc sống bao đời của người d&acirc;n v&ugrave;ng đất
              Li&ecirc;n Chung. Đ&acirc;y l&agrave; đặc sản đ&atilde; c&oacute;
              từ l&acirc;u đời được h&igrave;nh th&agrave;nh, lưu truyền từ đời
              n&agrave;y qua đời kh&aacute;c, cha truyền con nối g&igrave;n giữ,
              vun đ&uacute;c b&iacute; quyết l&agrave;m nghề c&ograve;n
              m&atilde;i theo thời gian. Từ xa xưa, người d&acirc;n x&atilde;
              Li&ecirc;n Chung đ&atilde; lưu truyền c&acirc;u ca: &ldquo;
              B&aacute;nh tr&aacute;i Xu&acirc;n Hương, C&agrave; Tương Sấu
              Bến&rdquo; Với ngụ &yacute; tương truyền thống tại th&ocirc;n Sấu,
              th&ocirc;n Bến đặc biệt v&agrave; c&oacute; độ thơm ngon hơn
              c&aacute;c nơi kh&aacute;c. Để ng&agrave;y nay ch&uacute;ng ta
              c&oacute; dịp thưởng thức một loại nước tương m&agrave;u
              v&agrave;ng sậm, s&aacute;nh đặc, vị ngọt v&agrave; tỏa m&ugrave;i
              thơm đặc trưng.
            </span>
          </p>
          <br />
          <p dir='ltr'>
            <span>
              Những chum Tương đậm chất địa phương được l&agrave;m với nguyện
              liệu ch&iacute;nh l&agrave; gạo nếp c&aacute;i hoa v&agrave;ng,
              đậu tương xanh, muối cộ v&agrave; nước đầu nguồn khu vực Rừng Sấu,
              x&atilde; Li&ecirc;n Chung. Trải qua nhiều c&ocirc;ng đoạn
              đ&ograve;i hỏi b&agrave;n tay tỉ mỉ, kỹ thuật kh&eacute;o
              l&eacute;o v&agrave; t&acirc;m huyết của người thợ l&agrave;m
              tương: Như Đồ X&ocirc;i - l&agrave;m mốc, ng&acirc;m ch&egrave;,
              ngả tương v&agrave; đặc biệt phải c&oacute; thời gian ng&acirc;m ủ
              l&ecirc;n hương 2-3 th&aacute;ng trong chum s&agrave;nh để cho ra
              đời sản phẩm &ldquo; tương Li&ecirc;n Chung&rdquo; chất lượng hảo
              hạng, an to&agrave;n v&agrave; gợi nhớ tới vị qu&ecirc; hương cho
              thực kh&aacute;ch khi thưởng thức.
            </span>
          </p>
          <br />
          <p dir='ltr'>
            <span>
              Nhằm g&igrave;n giữ n&eacute;t văn h&oacute;a ẩm thực qu&ecirc;
              hương, bảo tồn l&agrave;ng nghề truyền thống qu&ecirc; hương năm
              2022 c&ocirc;ng ty TNHH LC FOOD được th&agrave;nh lập v&agrave;
              quyết t&acirc;m x&acirc;y dựng thương hiệu &ldquo; tương
              Li&ecirc;n Chung&rdquo; thơm ngon, đảm bảo an to&agrave;n vệ{" "}
            </span>
          </p>
          <br />
          <p>
            <span>&nbsp;</span>
          </p>
        </>
      ),
      images: [
        {
          id: 1,
          img: productTuong,
        },
        {
          id: 2,
          img: productTuong2,
        },
        {
          id: 3,
          img: productTuong3,
        },
        {
          id: 4,
          img: productTuong4,
        },
      ],
    },
  ]

  useEffect(() => {
    products.map((product) => {
      if (product.id == params.id) {
        setSelectImg(product.images[0])
      }
    })
  }, [])

  const handleSelectImg = (item) => {
    setSelectImg(item)
  }

  return (
    <div className='product-detail'>
      {products.map((product) => {
        return (
          <div className='' key={product.id}>
            {product.id == params.id && (
              <>
                <div className='product-detail-item'>
                  <div className='product-item-img'>
                    {selectImg && (
                      <Image
                        src={selectImg.img}
                        alt='img'
                        className='main-img'
                      />
                    )}
                    <div
                      className='list-img'
                      style={{
                        gridTemplateColumns: `repeat(${product.images.length}, 1fr)`,
                      }}>
                      {selectImg &&
                        product.images.map((item, index) => {
                          return (
                            <div
                              key={index}
                              onClick={() => handleSelectImg(item)}>
                              <Image
                                className={
                                  item.id == selectImg?.id ? "active-img" : ""
                                }
                                src={item.img}
                                alt='img'
                              />
                            </div>
                          )
                        })}
                    </div>
                  </div>
                  <div className='product-item-info'>
                    <h1 className='product-item-title'>{product.detail}</h1>
                    <div className='product-item-desc'>{product.shortDesc}</div>
                    <h1 className='product-item-price'>Giá: {product.price}</h1>
                  </div>
                </div>
                <div className='product-description'>{product.description}</div>
              </>
            )}
          </div>
        )
      })}
    </div>
  )
}

export default ProductDetail
