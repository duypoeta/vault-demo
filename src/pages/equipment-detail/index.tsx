import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import Button from "@/components/button";
import { BookmarkIcon, ChevronRightIcon, PhoneIcon } from "@heroicons/react/24/outline";
import Calendar from "@/components/calendar";

import image_1 from "@/assets/images/1.jpg";
import image_2 from "@/assets/images/2.jpg";
import image_3 from "@/assets/images/3.jpg";
import image_4 from "@/assets/images/4.jpg";
import image_5 from "@/assets/images/5.jpg";
import ggMapImg from "@/assets/images/ggmap.jpg";
import DataTable from "@/components/datatable/demo-datatable";

const EquipmentTag = (content: string) => {
    return (
        <div className="bg-background-tag text-main text-sm font-normal px-[10px] py-[5px] rounded-md w-fit">
            {content}
        </div>
    );
};

const priceOptions = [
    { type: "Date", price: "335" },
    { type: "Weekend", price: "535" },
    { type: "Week", price: "1800" },
    { type: "Month", price: "4300" },
];
const pricingOptionsRenderer = priceOptions.map((priceOption, index) => (
    <div key={index} className="flex justify-between p-3 border-b border-solid border-background-1">
        <div>{priceOption.type}</div>
        <div className="text-primary font-bold">${priceOption.price}</div>
    </div>
));

const specificationsList: string[] = [
    "Lorem ipsum dolor sit amet consectetur",
    "Ultrices morbi nibh sed elementum nullam magna",
    "Nec faucibus pellentesque morbi fringilla",
    "Interdum mattis pulvinar est pellentesque",
    "Posuere dui arcu eget sed aliquet",
    "Ultrices morbi nibh sed elementum nullam magna",
    "Nec faucibus pellentesque morbi fringilla",
    "Interdum mattis pulvinar est pellentesque tincidunt",
    "Posuere dui arcu eget sed aliquet.",
    "Lorem ipsum dolor sit amet consectetur",
    "Ultrices morbi nibh sed elementum",
    "Nec faucibus pellentesque morbi fringilla",
    "Interdum mattis pulvinar est pellentesque tincidunt",
    "Posuere dui arcu eget sed aliquet",
    "Ultrices morbi nibh sed elementum nullam magna",
];
const specificationsRenderer = (
    <ul className="columns-2 columns-md list-disc">
        {specificationsList.map((item, index) => (
            <li className="ml-5" key={index}>
                {item}
            </li>
        ))}
    </ul>
);

const carouselRender = (
    <div className="w-full md:w-[365px] bg-white p-3 rounded-md">
        <Carousel autoPlay={true} showArrows={true} showThumbs={false} infiniteLoop={true}>
            <div>
                <Image width={345} height={260} alt="image 1" src={image_1} />
                <p className="legend">Legend 1</p>
            </div>
            <div>
                <Image width={345} height={260} alt="image 2" src={image_2} />
                <p className="legend">Legend 2</p>
            </div>
            <div>
                <Image width={345} height={260} alt="image 3" src={image_3} />
                <p className="legend">Legend 3</p>
            </div>
            <div>
                <Image width={345} height={260} alt="image 4" src={image_4} />
                <p className="legend">Legend 4</p>
            </div>
            <div>
                <Image width={345} height={260} alt="image 5" src={image_5} />
                <p className="legend">Legend 5</p>
            </div>
        </Carousel>
    </div>
);

const pricingOptionRender = (
    <div className="w-full md:w-[365px] bg-white mt-3 rounded-md min-h-[200px] px-[25px] py-[15px]">
        <h3>Pricing Options</h3>
        {pricingOptionsRenderer}
        <div className="flex gap-2 mt-5 justify-around">
            <Button
                title="Contact Us"
                icon={<PhoneIcon className="growh-6 w-6" aria-hidden="true" />}
                theme="secondary"
                className="grow justify-center py-3 px-5"
            />
            <Button
                title="Rent Today"
                icon={<ChevronRightIcon className="h-6 w-6" aria-hidden="true" />}
                theme="primary"
                className="grow justify-center py-3 px-5"
            />
        </div>
    </div>
);

const availabilityRender = (
    <div className="w-full md:min-w-[365px] bg-white mt-3 min-h-[200px] px-[25px] py-[15px] rounded-md">
        <h3>Availability</h3>
        <div className="py-3">
            <Calendar></Calendar>
        </div>
    </div>
);

const locationRender = (
    <div className="w-full mt-2 md:min-w-[365px] bg-white my-3 min-h-[200px] px-[25px] py-[15px] rounded-md">
        <h3>Location Map</h3>
        <Image src={ggMapImg} width={300} alt="" className="pt-2"></Image>
    </div>
);

const descriptionRender = (
    <div className="w-full mt-2 md:m-0 md:min-w-[365px] bg-white rounded-md py-[15px] px-[25px]">
        <h2 className="hidden md:block">GMC Sierra Diesel 1500</h2>
        <h3 className="md:hidden mb-2">GMC Sierra Diesel 1500</h3>
        <div className="flex gap-2 flex-wrap">
            {EquipmentTag("SUV")}
            {EquipmentTag("GMC")}
            {EquipmentTag("2022")}
            {EquipmentTag("Financed")}
        </div>
        <div className="my-3">
            Lorem ipsum dolor sit amet consectetur. Ultrices morbi nibh sed elementum nullam magna. Nec faucibus
            pellentesque morbi fringilla. Interdum mattis pulvinar est pellentesque tincidunt adipiscing auctor. Posuere
            dui arcu eget sed aliquet. Ultrices morbi nibh sed elementum nullam magna. Nec faucibus pellentesque morbi
            fringilla. Interdum mattis pulvinar est pellentesque tincidunt adipiscing auctor. Posuere dui arcu eget sed
            aliquet.
            <br></br>
            Ultrices morbi nibh sed elementum nullam magna. Nec faucibus pellentesque morbi fringilla. Interdum mattis
            pulvinar est pellentesque tincidunt adipiscing auctor. Posuere dui arcu eget sed aliquet.
        </div>
        <div className="flex gap-2">
            <Button
                title="Add to Favorite"
                icon={<BookmarkIcon className="h-6 w-6" aria-hidden="true" />}
                theme="secondary"
                className="py-3 px-5"
            />
            <Button
                title="Rent Today"
                icon={<ChevronRightIcon className="h-6 w-6" aria-hidden="true" />}
                theme="primary"
                className="py-3 px-5"
            />
        </div>

        <DataTable classNames="mt-3 w-full" />
    </div>
);

const specificationRender = (
    <div className="w-full mt-2 md:min-w-[365px] bg-white mt-3 rounded-md py-[15px] px-[25px] ">
        <h3>Specifications</h3>
        {specificationsRenderer}
    </div>
);

const galleryRender = (
    <div className="w-full mt-3 md:min-w-[365px] bg-white rounded-md py-[15px] px-[25px]">
        <h3>Gallery</h3>
        <div className="mt-3 flex overflow-auto gap-3 justify-between">
            <Image width={200} height={165} alt="image 1" src={image_1} />
            <Image width={200} height={165} alt="image 2" src={image_2} />
            <Image width={200} height={165} alt="image 3" src={image_3} />
            <Image width={200} height={165} alt="image 4" src={image_4} />
            <Image width={200} height={165} alt="image 5" src={image_5} />
        </div>
    </div>
);

const termOfRentalRender = (
    <div className="bg-white w-full md:min-w-[365px] my-3  min-h-[200px] rounded-md py-[15px] px-[25px]">
        <h3>Term of Rental</h3>
        <span className="mt-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce elementum sit amet enim nec ullamcorper.
            Phasellus sodales purus quam, quis pulvinar est dictum quis. Integer mollis at lorem quis convallis. Integer
            augue magna, mollis et aliquet auctor, sodales vitae orci. Phasellus at rutrum nibh. Etiam auctor diam
            sapien, sed interdum metus ullamcorper non. Integer et tincidunt sapien. Fusce at urna dictum, ullamcorper
            magna vitae, dignissim erat. Nulla malesuada dignissim est, sit amet ultrices mi efficitur et. Proin
            ultrices sapien a elit vehicula, in consequat lectus dignissim. Ut et metus vitae purus tristique ornare a
            vel augue. Nunc pretium velit non suscipit convallis. Proin sagittis volutpat dolor non dapibus. Sed ac
            faucibus mauris, id congue odio. Aenean turpis lacus, laoreet ac mi eget, finibus commodo libero. Integer
            ullamcorper egestas erat et consectetur.
            <br></br>
            Ut sodales nibh massa, nec interdum dui tincidunt vel. Suspendisse suscipit placerat hendrerit. Donec et
            nunc in velit imperdiet hendrerit. Morbi hendrerit mi lacus, non egestas arcu feugiat id. Nunc faucibus eu
            nisi vitae hendrerit. Vivamus malesuada ipsum ut mattis gravida. Aliquam a lacus nisi. Aliquam sit amet
            placerat dui. Vestibulum egestas, metus quis laoreet ornare, felis lacus eleifend nisi, vitae commodo urna
            lorem sed sem. Donec sed massa vel magna faucibus malesuada. Fusce in ligula ac tellus consectetur semper
            vel fringilla metus. Praesent eget magna vel nisi ullamcorper eleifend. Cras faucibus tempor eros, non
            fringilla leo dapibus at. Etiam eu maximus massa. Pellentesque pulvinar, orci eget semper malesuada, purus
            ipsum ultricies risus, nec dapibus metus velit viverra lacus.
            <br></br>
            Duis vitae purus eget nulla mollis dignissim consectetur et orci. Praesent dignissim interdum ante at
            interdum. Mauris pulvinar ultricies est. Donec ultricies efficitur sapien. Suspendisse nec tincidunt est.
            Curabitur nec sem nisi. In facilisis dui sapien, sit amet volutpat erat eleifend sit amet. Mauris tempus
            neque sit amet ligula hendrerit, sed maximus libero consequat. Donec ultrices sem ipsum, vel sollicitudin
            metus interdum a. Duis volutpat tellus a ipsum accumsan rhoncus. Mauris ac tempus risus, commodo posuere
            libero. Sed suscipit ante quis dui varius fringilla. Etiam euismod diam in laoreet imperdiet. Sed placerat
            imperdiet pulvinar. Suspendisse ultricies elit non augue tempor, ac vestibulum purus aliquam.
        </span>
    </div>
);

const EquipmentDetail = () => {
    return (
        <div>
            <div className="w-full hidden md:flex md:gap-3">
                {/* Left sidebar & main wrapper */}
                <div>
                    {carouselRender}
                    {pricingOptionRender}
                    {availabilityRender}
                    {locationRender}
                </div>
                <div>
                    {descriptionRender}
                    {specificationRender}
                    {galleryRender}
                    {termOfRentalRender}
                </div>
            </div>
            <div className="w-full md:hidden px-3">
                {carouselRender}
                {descriptionRender}
                {availabilityRender}
                {pricingOptionRender}
                {locationRender}
                {specificationRender}
                {termOfRentalRender}
            </div>
        </div>
    );
};

export default EquipmentDetail;
