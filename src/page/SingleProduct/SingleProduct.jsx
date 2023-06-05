import { useParams } from "react-router-dom";
import "./SingeProdcut.css";
import Headers from "../../components/header/Header";
import { products } from "../../data/products";
import { useContext } from "react";
import { Data } from "../context/Context";
import { useState } from "react";

const SingleProduct = () => {
  const [qty, setQty] = useState(0);

  const { addToCart } = useContext(Data);

  const { id } = useParams();

  const product = products.find((product) => product.id === +id);
  const { title, reviews, rating, price, image } = product;

  return (
    <div className="single-product">
      <Headers />
      <div className="body-home">
        <div className="body-home-full">
          <div className="body-home-left">
            <h2 className="body-home-left-h2">{title}</h2>
            <div className="body-home-left-rating">
              <span className="rr">
                <i className="bi bi-star-fill"></i>
                {rating}
              </span>
              <span className="ee">تقييمات {reviews}</span>
            </div>
            <div className="body-home-left-price">
              <p>{price}</p>
            </div>
            <div className="body-home-left-cart">
              <h4>الكمية</h4>
              <div className="qu">
                <button
                  className="btn"
                  onClick={() => addToCart({ ...product, quantity: qty })}
                >
                  اظافة الى سلة التسوق
                </button>
                <input
                  type="number"
                  className="number"
                  value={qty}
                  onChange={(e) => setQty(e.target.value)}
                  min={1}
                  max={10}
                />
              </div>
            </div>
          </div>
          <div className="body-home-right">
            <img src={image} alt="" />
          </div>
        </div>

        <div className="bottom-para">
          <h2>حول هذه السلعة</h2>
          <p>
            صوت فائق: استمتع بصوت واضح وراحة فائقة مع سماعات رأس ستوديو مونيتور
            من ون اوديو. تتمتع سماعة الرأس بمشغلات كبيرة بحجم 50 ملم مع مغانط من
            النيوديميوم، حيث يشكل الجهير القوي والصوت الواضح والنغمات العالية
            النقية صوت هاي فاي مثالي. يوفر التصميم المغلق من الخلف صوت هاي فاي
            غامر عالي الدقة برقاقة سي اس ار ومكبرات الصوت 40 ملم معًا، إنها أفضل
            من السماعات بخاصية إلغاء الصوت النشطة من حيث جودة الأصوات. صُممت
            وسائد الأذن المبطنة عالية الجودة خصيصًا لسماعات رأس الستوديو
            الاحترافية لتوفير أقصى قدر من الراحة وعزل الضوضاء. عصابة الرأس قابلة
            للتعديل وقابلة للتمدد من أجل إيجاد الزاوية المفضلة المرغوب فيها كي
            تلائمك. لا مزيد من المحولات: تتمتع بسلك ملفوف بنمط دي جيه (بطول 9.8
            قدم ببنية قابلة للتمدد) حيث يصل بسهولة من التلفزيون أو الستيريو إلى
            كرسيك المفضل. تتضمن قابس قياسي 6.35 ملم ومقبس 3.5 ملم. يتمتع كلاهما
            بتصميم قابل للفصل بالكامل، حيث يمكنك توصيل جهاز الدمج الصوتي الذي
            تريد استخدامه. مراقبة من جانب واحد: تتمتع سماعة الرأس بأغطية أذن
            دوارة بزاوية 90 درجة لعزل أذن واحدة في أي وقت، كما تتميز بشريط رأس
            مرن وقابل للتعديل الذاتي، حيث توفر تجربة استماع خالية من التعب يمكن
            أن تدوم لساعات، مثالية لعشاق الموسيقى والدمج الصوتي. تعمل مع: ايباد
            وايبود وايفون واندرويد والعديد من أجهزة الصوت الأخرى. توفر صوت عالي
            الجودة ومتانة فائقة وراحة قصوى. تُمثل هذه السماعات الرائعة خيارك
            المفضل.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
