<template>
  <div class="json-editor">
    <textarea ref="textarea"></textarea>
  </div>
</template>

<script>
  import CodeMirror from 'codemirror'
  import 'codemirror/addon/lint/lint.css'
  import 'codemirror/lib/codemirror.css'
  import 'codemirror/theme/rubyblue.css'
  import 'codemirror/mode/javascript/javascript'
  import 'codemirror/addon/lint/lint'
  import 'codemirror/addon/lint/json-lint'
  require('script-loader!jsonlint')
  export default {
    name: 'jsonEditor',
    data() {
      return {
        jsonEditor: false
      }
    },
    props: ['value'],
    watch: {
      value(value) {
        const editorValue = this.jsonEditor.getValue()
        if (value !== editorValue) {
          this.jsonEditor.setValue(JSON.stringify(this.value, null, 2))
        }
      }
    },
    methods: {
      getValue() {
        return this.jsonEditor.getValue()
      }
    },
    mounted() {
      this.jsonEditor = CodeMirror.fromTextArea(this.$refs.textarea, {
        lineNumbers: true,
        mode: 'application/json',
        gutters: ['CodeMirror-lint-markers'],
        theme: 'rubyblue',
        lint: true
      })
      this.jsonEditor.setValue(JSON.stringify(this.value, null, 2))
      this.jsonEditor.on('change', cm => {
        this.$emit('changed', cm.getValue())
        this.$emit('input', cm.getValue())
      })
    }
  }
</script>

<style>
  .CodeMirror {
    height: 100%;
  }

  .json-editor .cm-s-rubyblue span.cm-string {
    color: #F08047;
  }
</style>
