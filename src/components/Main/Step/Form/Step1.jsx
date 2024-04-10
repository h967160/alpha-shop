import styles from "./Step1.module.scss";

// 城市選項元件
const CityOptions = () => {
  const cities = [
    { value: "", text: "請選擇縣市" },
    { value: "KLU", text: "基隆市" },
    { value: "TPH", text: "新北市" },
    { value: "TPE", text: "臺北市" },
    { value: "TYC", text: "桃園市" },
    { value: "HSH", text: "新竹縣" },
    { value: "HSC", text: "新竹市" },
    { value: "MAC", text: "苗栗市" },
    { value: "MAL", text: "苗栗縣" },
    { value: "TXG", text: "臺中市" },
    { value: "CWH", text: "彰化縣" },
    { value: "CWS", text: "彰化市" },
    { value: "NTC", text: "南投市" },
    { value: "NTO", text: "南投縣" },
    { value: "YLH", text: "雲林縣" },
    { value: "CHY", text: "嘉義縣" },
    { value: "CYI", text: "嘉義市" },
    { value: "TNN", text: "臺南市" },
    { value: "KHH", text: "高雄市" },
    { value: "IUH", text: "屏東縣" },
    { value: "PTS", text: "屏東市" },
    { value: "ILN", text: "宜蘭縣" },
    { value: "ILC", text: "宜蘭市" },
    { value: "HWA", text: "花蓮縣" },
    { value: "HWC", text: "花蓮市" },
    { value: "TTC", text: "臺東市" },
    { value: "TTT", text: "臺東縣" },
    { value: "PEH", text: "澎湖縣" },
    { value: "KMN", text: "金門縣" },
    { value: "LNN", text: "連江縣" },
  ];
  return (
    <>
      {/* 用map遍歷將每個城市選染成option元素 */}
      {cities.map((city) => (
        <option key={city.value} value={city.value}>
          {city.text}
        </option>
      ))}
    </>
  );
};

export default function Step1() {
  return (
    //  address phase
    <form className="col col-12" data-phase="address">
      <h3 className={styles.formTitle}>寄送地址</h3>
      <section className={`${styles.formBody} col col-12`}>
        <div className={`${styles.col} col-12`}>
          <div className={styles.inputGroup}>
            <div className={styles.inputLabel}>稱謂</div>
            <div className={styles.selectContainer}>
              <select>
                <option value="mr" selected>
                  先生
                </option>
                <option value="ms">女士</option>
                <option value="mx">不明</option>
              </select>
            </div>
          </div>
          <div className={styles.inputGroup}>
            <div className={styles.inputLabel}>姓名</div>
            <input type="text" placeholder="請輸入姓名" />
          </div>
        </div>
        <div className={`${styles.col} col-12`}>
          <div className={styles.inputGroup}>
            <div className={styles.inputLabel}>電話</div>
            <input type="tel" placeholder="請輸入行動電話" />
          </div>
          <div className={styles.inputGroup}>
            <div className={styles.inputLabel}>Email</div>
            <input type="email" placeholder="請輸入電子郵件" />
          </div>
        </div>
        <div className={`${styles.col} col-12`}>
          <div className={styles.inputGroup}>
            <div className={styles.inputLabel}>縣市</div>
            <div className={styles.selectContainer}>
              <select required>
                <CityOptions />
              </select>
            </div>
          </div>
          <div className={styles.inputGroup}>
            <div className={styles.inputLabel}>地址</div>
            <input type="text" placeholder="請輸入地址" />
          </div>
        </div>
      </section>
    </form>
  );
}
