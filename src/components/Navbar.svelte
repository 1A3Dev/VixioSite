<style>
	:global(body.dark-mode) .navbar-menu, :global(body.dark-mode) .navbar-brand {
		background-color: #161b22;
	}
    :global(body.dark-mode) .navbar-item, :global(body.dark-mode) .navbar-burger {
        color: white !important;
    }
    :global(body.dark-mode) a.navbar-item:focus, :global(body.dark-mode) a.navbar-item:focus-within, :global(body.dark-mode) a.navbar-item:hover {
        background-color: #0d1117;
    }
</style>

<script>
    let active = false;
</script>

<nav class="navbar">
    <div class="navbar-brand">
        <a class="navbar-burger" href="#!" on:click|preventDefault={() => active = !active}>
            <span></span>
            <span></span>
            <span></span>
        </a>
    </div>
    <div class="navbar-menu" class:is-active={active}>
        <div class="navbar-start">
            <a class="navbar-item" href="#!" onclick="toggleTheme();">
                <span><i class="fas fa-moon"></i></span>
            </a>

            <a class="navbar-item" target="_blank" href="https://github.com/1A3Dev/Vixio/releases">
                <span><i class="fab fa-github"></i></span>
                <span style="margin-left: 5px;">Releases</span>
            </a>

            <a class="navbar-item" target="_blank" href="https://discord.gg/kNHmqYH">
                <span><i class="fab fa-discord"></i></span>
                <span style="margin-left: 5px;">Discord</span>
            </a>

            <a class="navbar-item" target="_blank" href="https://github.com/1A3Dev/Vixio/wiki">
                <span><i class="fas fa-book"></i></span>
                <span style="margin-left: 5px;">Wikipedia</span>
            </a>
        </div>
    </div>
</nav>
