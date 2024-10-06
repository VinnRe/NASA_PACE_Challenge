const Clouds = () => {
    return (
        <div className="clouds-lessonMat">
            <h1>Exploring Clouds: A Journey into the Sky!</h1>
            <h2>What are Clouds?</h2>
            <p>Clouds are like fluffy pillows in the sky! They are made up of tiny water droplets or ice crystals that come together. Did you know that there are different types of clouds? Some are soft and white, while others can be dark and stormy!</p>

            <h2>Why Do We Study Clouds?</h2>
            <p>Scientists study clouds to understand the weather and how our planet works. By observing clouds, we can predict if it will rain, snow, or be sunny!</p>

            <h2>Meet the Cool Satellites!</h2>
            <p>To study clouds from space, scientists use special satellites that can take pictures of our planet and its clouds. Here are some important satellites that help us learn about clouds:</p>
            <ul>
                <li>Aqua Satellite <br /> 
                    <li>Instrument: Atmospheric Infrared Sounder (AIRS)</li>
                    <li>What it does: This satellite helps us see the temperature and amount of water vapor in the clouds! It collects data every 6 minutes, like a super-fast weather reporter! It can measure the cloud-cleared infrared radiances and analyze cloud top temperature and height.</li>
                    <li>Data Collection: AIRS provides near real-time data and helps scientists retrieve important cloud properties. For example, it observes how clouds change over time and can even detect their thickness and phase (ice, water, or a mix).</li>
                </li>
                <li>Terra Satellite <br />
                    <li>Instrument: Moderate-Resolution Imaging Spectroradiometer (MODIS)</li>
                    <li>What it does: This satellite tells us how thick clouds are and if they are made of ice or water! It takes pictures in different colors to give scientists important information. MODIS also collects monthly averages of cloud properties, including cloud optical and physical properties, allowing scientists to study seasonal changes in cloud cover and their effects on the Earth’s climate.</li>
                    <li>Data Collection: The MOD08_M3 product provides comprehensive data about cloud properties and atmospheric conditions that are essential for understanding weather patterns and climate change.</li>
                </li>
                <li>DMSP F16 Satellite <br />
                    <li>Instrument: Special Sensor Microwave Imager/Sounder (SSMIS)</li>
                    <li>What it does: This satellite helps retrieve ocean wind speed, water vapor, cloud water, and rain rate. It is crucial for understanding how clouds contribute to precipitation and the overall water cycle on Earth.</li>
                    <li>Data Collection: The SSMIS data is carefully inter-calibrated to provide consistent readings over time, which is important for tracking changes in atmospheric conditions.</li>
                </li>
            </ul>
            
            <h2>How Do We Collect Cloud Data?</h2>
            <p>Using the satellites, scientists collect a lot of information, including:</p>
            <ul>
                <li>Cloud Top Temperature: How hot or cold the top of the cloud is!</li>
                <li>Cloud Height: How high the cloud is in the sky!</li>
                <li>Cloud Phase: Is the cloud made of ice, water, or a mix of both?</li>
                <li>Cloud Optical Properties: Information about how clouds scatter light, which affects climate.</li>
                <li>Atmospheric Water Vapor: The amount of water vapor present, crucial for weather predictions.</li>
            </ul>
        </div>
    )
}

export default Clouds;