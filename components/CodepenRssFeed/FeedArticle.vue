<template>
  <div class="article">
    <div class="title">
      <h3>{{article.title}}</h3>
    </div>
    <div class="body">
      <!-- <p class="content" v-html="article.content"></p> -->
      <p>
        <a :href="article.link" target="_blank" style="color: white">
          <button>See pen ⟶</button>
        </a>
      </p>
      <p>
        <img class="codepen_image" :src="article.guid + '/image/small.png'" alt />
      </p>
    </div>
    <div class="footer">
      <span class="hostname">{{this.getHostname()}}</span>
      <span v-if="article.isoDate" class="middot">&bull;</span>
      <span class="datetime">{{this.getDateTime()}}</span>
    </div>
  </div>
</template>

<script>
const parseDate = tdate => {
  const systemDate = new Date(Date.parse(tdate));
  const userDate = new Date();

  const diff = Math.floor((userDate - systemDate) / 1000);
  if (diff < 59) {
    return diff + "s";
  }

  if (diff <= 3540) {
    return Math.round(diff / 60) + "m";
  }

  if (diff <= 86400) {
    return Math.round(diff / 3600) + "h";
  }

  if (diff < 604800) {
    return Math.round(diff / 86400) + "d";
  }

  return systemDate.toString().substring(4, 10);
};

export default {
  name: "Article",
  props: ["article"],
  methods: {
    getHostname() {
      try {
        const urlObj = new URL(this.article.link);
        return urlObj.hostname.replace("www.", "").replace("ww2.", "");
      } catch (e) {
        console.error(e.toString());
      }
    },
    getDateTime() {
      if (this.article.isoDate) {
        return parseDate(this.article.isoDate);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
h3 {
  margin: 0;
  padding: 0;
}
.article {
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
  padding: 1.25rem;
  margin-bottom: 15px;
}
.body .content {
  margin-top: 5px;
}
.footer {
  font-size: 13px;
  color: #777;
  display: flex;
  align-items: flex-end;
}
.middot {
  font-size: 12px;
  margin: 0 8px;
}

.content {
  background: #777;
}
/* see pen button */

[type="button"],
[type="reset"],
[type="submit"],
button {
  -webkit-appearance: button;
}

button,
label {
  text-transform: uppercase;
  letter-spacing: 0.15em;
  font-size: 13px;
}
button {
  background: 0 0;
  border: 1px solid #7f7ff8;
  color: #7f7ff8;
  border-radius: 1000px 1000px;
  padding: 10px;
  width: 100%;
  font-family: Gotham XNarrow A, Gotham XNarrow B, -apple-system,
    BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;
  -webkit-transition: all 0.25s ease;
  transition: all 0.25s ease;
  cursor: pointer;
  outline: 0;
}

button,
input {
  overflow: visible;
}

button {
  margin: 15px 0;
  color: #ec633a;
}
button,
button :hover {
  border: 1px solid #ec633a;
}
button :hover {
  background: #ec633a;
}

button,
input,
optgroup,
select,
textarea {
  line-height: 1.15;
}

a a,
a:active,
a:visited,
p a,
p a:active,
p a:visited {
  text-decoration: none;
  color: #fff;
  font-weight: 700;
}

.codepen_image {
  width: 100%;
}
</style>
