<template>
    <div class="container">
        <div class="landing-page">
            <h1>Welcome to Eid Cards!</h1>
            <p>Choose a template below and customize your Eid cards.</p>
    
            <div class="card-templates">
                <NuxtLink :to="template.link" v-for="template in templates" :key="template.id" class="card-template">
                    <img :src="template.image" :alt="template.name" />
                    <button @click="editCard(template)">Edit Card</button>
                </NuxtLink>
            </div>
    
        </div>

    </div>
</template>
  
<script setup>
import t1 from '@/assets/template/Taj-Mahal-Design.png'
import t2 from '@/assets/template/Masjid-Design.png'
import t3 from '@/assets/template/moon-and-mosque-design.png'

// Sample card templates
const templates = [
    {
        id: 1,
        name: 'Template 1',
        image: t1,
        link: 'taj-mahal-design'
    },
    {
        id: 2,
        name: 'Template 2',
        image: t2,
        link: 'simple-masjid-design'
    },
    {
        id: 3,
        name: 'Template 3',
        image: t3,
        link: 'moon-and-mosque-design'
    },
];


</script>
  
<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');
// Variables
$primary-color: #2196f3;
$secondary-color: #f44336;
$background-color: #f1f1f1;


// Landing Page
.landing-page {
    font-family: 'Roboto', sans-serif;

    width: 100vw;
    margin: 0 auto;
    padding: 20px;
    text-align: center;
    background-color: $background-color;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
        font-size: 48px;
        color: $primary-color;
        margin-bottom: 20px;
    }

    p {
        font-size: 24px;
        color: #555;
        margin-bottom: 40px;
    }

    .card-templates {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;

        .card-template {
            @extend %card-base;
            margin: 20px;
            width: 400px;
            transition: 0.2s ease-in;
            cursor: pointer;
            text-decoration: none;

            &:hover {
                transform: scale(1.07);
            }

            img {
                width: 100%;
                height: auto;
                margin-bottom: 20px;
                border-radius: 8px;
                height: 200px;


            }

            h3 {
                font-size: 24px;
                margin-bottom: 10px;
            }

            p {
                font-size: 16px;
                color: #777;
                margin-bottom: 20px;
            }

            button {
                @extend %btn-base;
                margin-top: auto;
            }
        }
    }
}

// Placeholder Selectors
%card-base {
    background-color: #fff;
    border-radius: 8px;
    padding: 20px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    align-items: center;
}

%btn-base {
    background-color: $primary-color;
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: darken($primary-color, 10%);
    }
}

// Responsive Styles
@media screen and (max-width: 600px) {
    .landing-page {
        h1 {
            font-size: 36px;
            margin-bottom: 10px;
        }

        p {
            font-size: 18px;
            margin-bottom: 30px;
        }

        .card-templates {
            flex-direction: column;
            align-items: center;

            .card-template {
                width: 100%;
                margin: 20px 0;

                img {
                    margin-bottom: 10px;
                }
            }
        }
    }


}
</style>
  