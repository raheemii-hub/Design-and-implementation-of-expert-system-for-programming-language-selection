<script setup>
import { onMounted, ref } from "vue";
import ButtonAnswer from "@/components/ButtonAnswer.vue";
import Heading from "@/components/Heading.vue";
import data from "@/assets/data.yml";
import config from "@/config.yml";
import { useRouter } from 'vue-router'

const router = useRouter()

const loading = ref(true);
const currentQuestion = ref(null);
const categories = ref(null);
const loadedData = ref(null);

function showResults(){
  var ratings = config.rating;
  var languageLeaderboard = [];
  for (var language in data.languages){
    var languageScoring = {}
    languageScoring.key = data.languages[language].key;
    languageScoring.score = 0;
    for (var key in ratings){
      for (var category in data.languages[language].rating[key]){
        languageScoring.score += categories.value[data.languages[language].rating[key][category]].score * ratings[key]
      }
    }
    languageLeaderboard.push(languageScoring);
  }
  var bestLanguage = languageLeaderboard.reduce(function(prev, current) {
    return (prev.score > current.score) ? prev : current
  })
  router.push({ path: '/result/' + bestLanguage.key});
};

function getGenericQuestion() {
  var index = Math.floor(Math.random() * loadedData.value.generic_questions.length);
  currentQuestion.value = loadedData.value.generic_questions[index];
  loadedData.value.generic_questions.splice(index, 1);
}

function getQuestionFromBestCategory() {
  var bestCategory = Object.keys(categories.value).reduce(function (a, b) {
    return categories.value[a].score > categories.value[b].score ? a : b;
  });
  if (categories.value[bestCategory].questions.length <= 0) {
    showResults();
    return;
  }
  var index = Math.floor(
    Math.random() * categories.value[bestCategory].questions.length
  );
  currentQuestion.value = categories.value[bestCategory].questions[index];
  for (var key in currentQuestion.value.answers) {
    var tiers = Object.keys(config.results);
    for (var i in tiers) {
      if (currentQuestion.value.answers[key].result === tiers[i]) {
        currentQuestion.value.answers[key].result = {};
        currentQuestion.value.answers[key].result[tiers[i]] = [bestCategory];
      }
    }
  }
  categories.value[bestCategory].questions.splice(index, 1);
}

function getQuestion() {
  loading.value = true;
  if (loadedData.value.generic_questions.length > 0) {
    getGenericQuestion();
  } else {
    getQuestionFromBestCategory();
  }
  setTimeout(function () {
    loading.value = false;
  }, 500);
}

function beginQuiz() {
  loadedData.value = JSON.parse(JSON.stringify(data));
  categories.value = loadedData.value.categories;
  for (var key in categories.value) {
    categories.value[key].score = 0;
  }
  getQuestion();
}

function score(answer) {
  const results = config.results;

  for (var key in answer.result) {
    for (var i in answer.result[key]) {
      categories.value[answer.result[key][i]].score += results[key];
    }
  }
}

function handleAnswer(answer) {
  getQuestion();
  score(answer);
}

onMounted(() => {
  beginQuiz();
});
</script>
<template>
  <template v-if="!loading && currentQuestion">
    <Heading :displayText="currentQuestion.query" />
    <div class="min-h-full flex flex-col justify-center">
      <div class="grid grid-cols-1 gap-4 md:gap-4 md:grid-cols-4">
        <template v-for="answer in currentQuestion.answers">
          <ButtonAnswer
            :displayText="answer.value"
            @click="handleAnswer(answer)"
          />
        </template>
      </div>
    </div>
  </template>
  <template v-else>
    <div class="flex items-center justify-center">
      <div
        class="spinner-border animate-spin inline-block w-20 h-20 border-8 rounded-full text-red-300"
        role="status"
      >
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  </template>
</template>
