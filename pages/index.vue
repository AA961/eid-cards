<script  setup>
import html2canvas from 'html2canvas';
import { useRoute, useRouter } from 'vue-router'

const route = useRoute();
let visibleCardOnly = ref(false)
// const router = useRouter()

let toName = ref("[Name]");
let fromName = ref("[Your Name]");
let cardHeading = ref("Have A Blessed Eid!");


if (route.query.to && route.query.from) {
    // set toName and fromName from query params
    toName.value = route.query.to
    fromName.value = route.query.from
    visibleCardOnly.value = true


    // do something with toName and fromName, e.g. pass them to a component
}

const sendWhatsappMessage = (message) => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `whatsapp://send?text=${encodedMessage}`;
    window.open(whatsappUrl);
};

useSeoMeta(() => ({
    title: 'Eid Card Designer | Create Beautiful Greeting Cards for Eid',
    description: 'Celebrate the joyous occasion of Eid with beautiful and personalized greeting cards. Choose from a variety of stunning templates to create your own unique design. Send your heartfelt wishes to loved ones near and far with Eid Card Designer.',
    ogTitle: 'Eid Card Designer | Create Beautiful Greeting Cards for Eid',
    ogDescription: 'Celebrate the joyous occasion of Eid with beautiful and personalized greeting cards. Choose from a variety of stunning templates to create your own unique design. Send your heartfelt wishes to loved ones near and far with Eid Card Designer.',
    //   ogImage: 'https://example.com/images/og-image.jpg',
    //   twitterCard: 'summary_large_image'
}));

useHead({
    meta: [
        {
            name: 'viewport',
            content: 'width=780'
        }
    ]
})

let edit = reactive({
    isEditCardHeading: false,
    isEditQoute: false,
    isEditToName: false,
    isEditFromName: false,
})




const palettes = [
    {
        bg: '#0d3b54',
        primary: '#95c3db',
        secondary: '#f5d06f',
        accent: '#BFAE9D',
    },
    {
        bg: '#131521',
        primary: '#F9E2C2',
        secondary: '#F6D196',
        accent: '#BFAE9D',
    },
    {
        bg: '#231E1C',
        primary: '#F3E3C2',
        secondary: '#F9DD9D',
        accent: '#AA8D6B',
    },
    {
        bg: '#201E1F',
        primary: '#D3C3A9',
        secondary: '#E3D2B2',
        accent: '#F5D6B4',
    },
    {
        bg: '#1A1F22',
        primary: '#F2D5A6',
        secondary: '#F8DDBA',
        accent: '#AF9B86',
    },
    {
        bg: '#2C2926',
        primary: '#F1E1C3',
        secondary: '#F9D79A',
        accent: '#A29C8E',
    },
    {
        bg: '#23272A',
        primary: '#E9D7B8',
        secondary: '#F1D69F',
        accent: '#8E7460',
    },
];


const eidUlFitarQuotes = [
    "Eid Mubarak! May your day be filled with joy and happiness.",
    "May the blessings of Eid fill your life with happiness and prosperity.",
    "Eid is a time to celebrate with family and friends. May you have a joyous Eid!",
    "May the spirit of Eid fill your heart with love and peace.",
    "Eid is a time to reflect on the blessings of the past year and to look forward to the year ahead.",
    "May the light of Eid brighten your path and lead you to success.",
    "Eid is a time to forgive and forget. May you have a peaceful and joyous Eid!",
    "Eid is a time to share and care. May you have a happy and prosperous Eid!",
    "Eid Mubarak! May your day be filled with laughter and smiles.",
    "Eid is a time to be grateful for all that we have. May you have a blessed Eid!",
    "Eid is a time to be thankful, so let's give thanks to Allah for all His blessings."
];

const eidUlAdhaQuotes = [
    "Eid ul Adha Mubarak! May your day be filled with peace, joy, and happiness.",
    "May the blessings of Eid ul Adha fill your life with love, compassion, and generosity.",
    "Eid ul Adha is a time to celebrate the sacrifice of Prophet Ibrahim. May your sacrifice be accepted by Allah.",
    "May the spirit of Eid ul Adha fill your heart with love and compassion for all living beings.",
    "Eid ul Adha is a time to come together as a community and celebrate our faith. May you have a joyous Eid!",
    "May the light of Eid ul Adha guide you on the path of righteousness.",
    "Eid ul Adha is a time to forgive and forget. May you have a peaceful and joyous Eid!",
    "Eid ul Adha is a time to share and care. May you have a happy and prosperous Eid!",
    "Eid ul Adha Mubarak! May your day be filled with laughter and smiles.",
    "Eid ul Adha is a time to be grateful for all that we have. May you have a blessed Eid!"
]


const currentQuotation = ref(eidUlFitarQuotes)

const selectedQuotation = ref(currentQuotation.value[0]);
const selectQuotation = (quotation) => selectedQuotation.value = quotation;

const selectedColor = ref(palettes[0]);
const selectColor = (color) => selectedColor.value = color;

function createYourCard() {
    fromName.value = toName.value
    toName.value = "[Name]";
    visibleCardOnly.value = false;
    selectedColor.value = palettes[1];
    selectedQuotation.value = quotes[quotes.length - 2];
}

const saveCardAsImage = () => {
    //  showBranding.value = false
    const branding = document.querySelector('.branding');
    branding.classList.remove("hide")

    const cardPreview = document.querySelector('.card-wrapper');
    html2canvas(cardPreview).then(canvas => {
        const image = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.download = "Eid Mubarak " +  toName.value ;
        link.href = image;
        link.click();
        showBranding.value = true

    });

    branding.classList.add("hide")

}



const sendOnWA = () => {

    const cardPreview = document.querySelector('.card-wrapper');
    html2canvas(cardPreview).then(canvas => {
        const image = canvas.toDataURL('image/png');
        // const link = document.createElement('a');
        // link.download = 'eid-card.png';
        // link.href = image;
        // link.click();
        const whatsappUrl = `whatsapp://send?text=${encodeURIComponent('Check out my Eid card!')}&image=${encodeURIComponent(image)}`;
        window.location.href = whatsappUrl;
    });
}

const openImage = () => {
    const cardPreview = document.querySelector('.card-wrapper');
    html2canvas(cardPreview).then(canvas => {
        const image = canvas.toDataURL('image/png');
        const imgElement = document.createElement('img');
        imgElement.src = image;
        const newWindow = window.open();
        newWindow.document.write(imgElement.outerHTML);
    });
};



</script>
<template>
    <section>
        <div class="container">
            <h2 class="preview-heading" v-show="!visibleCardOnly">Card Preview</h2>
            <div class="card-wrapper">
                <div class="card-container" :style="{ backgroundColor: selectedColor.bg }">
                    <div class="left-side">

                        <div class="edit-to-name">
                            <div class="edit" v-if="edit.isEditToName">
                                <input type="text" v-model="toName">
                                <button @click="edit.isEditToName = !edit.isEditToName">Save</button>
                            </div>
                            <h3 v-else class="to" :style="{ color: selectedColor.primary }"
                                @click="edit.isEditToName = !edit.isEditToName">To {{ toName }} </h3>
                        </div>


                        <div class="edit-card-heading">
                            <div class="edit" v-if="edit.isEditCardHeading">
                                <input type="text" v-model="cardHeading">
                                <button @click="edit.isEditCardHeading = !edit.isEditCardHeading">Save</button>
                            </div>

                            <h1 :style="{ color: selectedColor.secondary }" v-else
                                @click="edit.isEditCardHeading = !edit.isEditCardHeading">{{ cardHeading }}</h1>
                        </div>


                        <div class="edit-qutation qutation">
                            <div class="edit" v-if="edit.isEditQoute">
                                <textarea name="" id="" cols="30" rows="3" v-model="selectedQuotation"></textarea>
                                <button @click="edit.isEditQoute = !edit.isEditQoute">Save</button>
                            </div>
                            <p :style="{ color: selectedColor.primary }" v-else
                                @click="edit.isEditQoute = !edit.isEditQoute"> {{ selectedQuotation }}</p>
                        </div>

                        <div class="edit-from">
                            <div class="edit" v-if="edit.isEditFromName">
                                <input type="text" v-model="fromName">
                                <button @click="edit.isEditFromName = !edit.isEditFromName">Save</button>
                            </div>
                            <h3 class="from" :style="{ color: selectedColor.primary }" v-else
                                @click="edit.isEditFromName = !edit.isEditFromName">From {{ fromName }}
                            </h3>
                        </div>
                    </div>
                    <div class="img">
                        <img src="@/assets/imgs/taj-mahal.png" alt="">
                    </div>

                    <div class="branding hide">
                        <h4>eidcards.netlify.app</h4>
                    </div>
                </div>

            </div>

            <div class="create-your .mtb-3" v-if="visibleCardOnly">
                <button @click="createYourCard" class="button secondary .mtb-3">Create Your Card</button>
            </div>

            <div class="control-area" v-show="!visibleCardOnly">
                <div class="save-and-share">
                    <button @click="saveCardAsImage" class="save-button button secondary">Save as Image</button>
                    <button class="share-button button primary"
                        @click="sendWhatsappMessage(`https://eidcards.netlify.app/?to=${toName}&from=${fromName}`)">Share
                        via WhatsApp</button>
                </div>

                <div class="card-controls">

                    <div class="name-inputs">
                        <h3 class="name-inputs__title">To and From</h3>
                        <div class="input-group">
                            <label for="fromName" class="input-label">From:</label>
                            <input type="text" id="fromName" v-model="fromName" class="input-field">
                        </div>
                        <div class="input-group">
                            <label for="toName" class="input-label">To:</label>
                            <input type="text" id="toName" v-model="toName" class="input-field">
                        </div>
                    </div>

                    <div class="color-picker">
                        <h3 class="color-picker__title">Color Palette</h3>
                        <div class="color-swatches">
                            <div v-for="color in palettes" :key="color" class="color-swatch"
                                :style="{ backgroundColor: color.bg }" @click="selectColor(color)"></div>
                        </div>
                    </div>
                    <div class="quotation-picker">
                        <h3 class="quotation-picker__title">Quotations</h3>
                        <div class="eids-buttons">
                            <button @click="currentQuotation = eidUlFitarQuotes"
                                :class="{ currentEid: currentQuotation.length == 11 }">Eid Ul Fitar</button>
                            <button :class="{ currentEid: currentQuotation.length == 10 }"
                                @click="currentQuotation = eidUlAdhaQuotes">Eid Ul Adha</button>
                        </div>
                        <p>Click to choose.</p>
                        <div class="quotation-items">
                            <ul>
                                <li v-for="quotation in currentQuotation" :key="quotation" class="quotation-item"
                                    :class="{ selected: quotation === selectedQuotation }"
                                    @click="selectQuotation(quotation)">
                                    {{
                                        quotation }}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>


<style lang="scss" scoped>
.branding {
    position: absolute;
    bottom: 1%;
    font-family: 'Poppins', sans-serif;

}

.hide {
    display: none;
}

.container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    overflow: scroll;

    .preview-heading {
        margin: 2rem auto;
        text-align: center;
        font-family: 'Poppins', sans-serif;

    }

    .card-wrapper {
        display: flex;
        justify-content: center;
        height: 630px;
        width: 750px;
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
        overflow-x: scroll;

        position: relative;
        margin: 0rem auto;
        padding-bottom: 1rem;

        h2 {
            text-align: center;
            margin: 1rem auto;
        }

        .card-container {
            background-color: #f5f5f5;
            margin: 1rem;
            display: flex;
            justify-content: space-around;
            align-items: center;
            padding: 1.3rem;
            flex-wrap: nowrap;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);


            .left-side {


                .to {
                    font-family: 'Great Vibes', cursive;
                    font-size: 2rem;
                    margin: 2rem auto;
                }

                h1 {
                    font-size: 3rem;
                    font-family: 'Lobster Two', cursive;
                }

                .from {
                    font-family: 'Lobster Two', cursive;
                    text-align: end;
                }

                .qutation {
                    font-family: 'Great Vibes', cursive !important;
                    font-size: 1.6rem;
                    margin: 2rem auto;
                }
            }

            .img {
                img {
                    width: 100%;
                }
            }


        }
    }

}

.control-area {
    font-family: 'Poppins', sans-serif;
    padding: 2rem;

}

.save-and-share {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem auto;
}

.card-controls {
    display: flex;
    flex-direction: column;
    padding: 2rem;
}

.color-picker {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 40px;
}

.color-picker__title {
    margin-bottom: 20px;
    font-size: 24px;
    font-weight: bold;
}

.color-swatches {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.color-swatch {
    width: 60px;
    height: 60px;
    margin: 10px;
    cursor: pointer;
    border-radius: 50%;
    transition: transform 0.2s ease-in-out;
}

.color-swatch:hover {
    transform: scale(1.1);
}

.quotation-picker {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 40px;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    padding: 20px;
    margin: 20px 0;

    .eids-buttons {
        button {
            outline: none;
            border: none;
            padding: 0.6rem;
            font-size: 1rem;
            margin: 1rem;
            width: 150px;
            cursor: pointer;
            font-family: 'Poppins', 'Helvetica Neue', serif;
            border-radius: 4px;
            border: 1px solid #1e88e5;

            &.currentEid{
                background: #1e88e5;
                color: white;
            }
        }
    }
}

.quotation-picker__title {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
}

.quotation-items {
    margin-top: 20px;
}

.quotation-items ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

.quotation-item {
    margin-bottom: 10px;
    cursor: pointer;
    padding: 10px;
    border-radius: 5px;
    transition: background-color 0.3s ease-in-out;
}

.quotation-item:hover {
    background-color: #f2f2f2;
}

.quotation-item.selected {
    background-color: #1e88e5;
    color: #fff;
}

.input-group {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
}

.input-label {
    font-size: 16px;
    margin-bottom: 5px;
}

.input-field {
    padding: 10px;
    border-radius: 5px;
    border: none;
    background-color: #f8f8f8;
    font-size: 16px;
    margin-bottom: 10px;
}

.input-field:focus {
    outline: none;
    background-color: #fff;
    box-shadow: 0 0 3px 2px rgba(0, 0, 0, 0.1);
}

.button {
    padding: 10px 20px;
    border-radius: 5px;
    border: none;
    font-size: 18px;
    font-weight: bold;
    text-transform: uppercase;
    cursor: pointer;
}

.button.primary {
    background-color: #4caf50;
    color: #fff;
    margin-left: 10px;
}

.button.secondary {
    background-color: #f44336;
    color: #fff;
}
</style>