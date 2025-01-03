
import styles from './hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        {/* Left Section: Image */}
        <div className={styles.imageContainer}>
          <img
            src="/images/dr-ngozi-profile.svg" // Replace this path with the actual image path
            alt="Dr. Ngozi Awai Imaga"
            className={styles.heroImage}
          />
        </div>

        {/* Right Section: Text Content */}
        <div className={styles.content}>
          <div className={styles.subHeadingContainer}>
            <h5 className={styles.subHeading}>Transform Your Academic Experience with</h5>
          </div>
          <h1 className={styles.heading}>Prof. Ngozi Awa Imaga, PhD</h1>
          <p className={styles.description}>
          Meet Ngozi Awa Imaga, a Professor of Nutritional & Pharmacological Biochemistry at the University of Lagos with over 50 scholarly publications. She founded PNgfitfam, a wellness program offering bespoke meal plans and fitness regimens. Through her “Healthy Meal Swaps Plan” and the PNgfitfam Masterclass series, Prof. Ngozi helps people achieve lasting weight loss without fad diets. Having personally lost 20kg, she now shares her expertise in her book "Weightloss Secrets." Her research focuses on obesity, diabetes, and community health interventions. She has also authored 3 novels and is a creative writer with publications on Amazon.
          Welcome to PNg's world!
          </p>

          {/* Buttons */}
          <div className={styles.buttons}>
            <button className={styles.viewBlogButton}>View Blog</button>
            <button className={styles.contactButton}>Contact Us</button>
          </div>

          {/* Customer Info */}
          <div className={styles.customerInfo}>
            <img
              src="/images/happy-customers.svg" // Replace this path with the actual image path
              alt="Happy Customers"
              className={styles.customerImage}
            />
            <span className={styles.customerText}>
              <strong>430+</strong> Happy Customers
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
