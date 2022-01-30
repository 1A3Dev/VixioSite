<style>
	.navbar-menu, .navbar-brand, .navbar-dropdown {
		background-color: #161b22;
	}
    .navbar-item, .navbar-link, .navbar-burger {
        color: white !important;
    }
    .navbar-link.is-active, .navbar-link:focus, .navbar-link:focus-within, .navbar-link:hover, a.navbar-item.is-active, a.navbar-item:focus, a.navbar-item:focus-within, a.navbar-item:hover {
        background-color: #0d1117;
    }
    .navbar-dropdown {
        border-top: unset;
    }
    .is-hoverable > a:hover {
        background-color: #0d1117 !important;
    }

    .navbar-start {
        justify-content: center;
        align-items: center;
        width: 100%;
        gap: 1em;
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
