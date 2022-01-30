<script>

    export let type;
    export let syntax;

    const id = syntax.name.toLowerCase().replace(/\s/g, '_');

    async function copyLink(elementId) {
        window.location.href = window.location.href.replace(/#\w+$/g, '') + `#${elementId}`;
        const dummy = document.createElement('input'),
              text = window.location.href;
        document.body.appendChild(dummy);
        dummy.value = text;
        dummy.select();
        document.execCommand('copy');
        document.body.removeChild(dummy);
    }

</script>

<div class="card top" {id}>
    <header class="card-header">
        <span class="tag is-large" style="background-color: rgb(97, 237, 120)">{type.toUpperCase()}</span>
        <p class="card-header-title">{syntax.name}</p>
        <a aria-label="more options" class="card-header-icon" href="#!" on:click|preventDefault={() => copyLink(id)}>
            <span>Copy Link</span>
            <span class="icon"><i class="fas fa-hashtag"></i></span>
        </a>
    </header>
    <div class="card-content">
        <div class="content">

        <label class="label">Description:</label>
        <div class="content">{syntax.description}</div>

        <label class="label">Patterns:</label>
        <pre class="card-pattern">
            {@html 
                syntax.patterns
                    .join('<br>')
                    .replace(/\b(seen|from|of|in|reply with|append|set|add|remove)\b/gmui, '<span style="color: rgb(69, 134, 239)">$&</span>')
					.replace(/\b(bot|guild|user|member|role|channel|permission|emote|embed)(builder)?s?\b/gmui, '<span style="color: rgb(61, 226, 75)">$&</span>')
            }
        </pre>

        <label class="label">Example:</label>
        <pre class="card-example">
            {@html
                syntax.examples
                    .join('<br>')
                    .split('\\t')
                    .join('&nbsp;')
                    .replace(/\t(prefixes|aliases|roles|description|usage|bots|executable in|trigger):/gmui, '<span style="color: rgb(244, 182, 66)">$&</span>')
                    .replace(/\s".+"/gmui, '<span style="color: rgb(194, 66, 244)">$&</span>')
                    .replace(/(discord )?command/gmui, '<span style="color: rgb(244, 182, 66)">$&</span>')
                    .replace(/\{@.+\}/gmui, '<span style="color: rgb(224, 38, 38)">$&</span>')
                    .replace(/\b(seen|from|in|reply with|append|set|add|remove|if|is|make)(?!:)\b/gmui, '<span style="color: rgb(69, 134, 239)">$&</span>')
            }
        </pre>

        </div>
    </div>
</div>