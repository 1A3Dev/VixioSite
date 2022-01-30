<style>
	.navbar-menu {
		background-color: #161b22;
	}
    .navbar-item, .navbar-link {
        color: white;
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

            <a class="navbar-item" href="/VixioSite">
                <span><i class="fas fa-book"></i></span> 
                <span style="margin-left: 5px;">Documentation</span>
            </a>

            <div class="navbar-item has-dropdown is-hoverable">
                <a class="navbar-link" href="#!" on:click|preventDefault>
                    <span><i class="fab fa-github"></i></span>
                    <span style="margin-left: 5px;">GitHub</span>
                </a>

                <div class="navbar-dropdown">
                    <a class="navbar-item" target="_blank" href="https://github.com/iBlitzkriegi/Vixio/issues/new?template=bug_report.md">Report issue</a>
                    <a class="navbar-item" target="_blank" href="https://github.com/iBlitzkriegi/Vixio/issues/new?template=feature_request.md">Report suggestion / idea</a>
                    <a class="navbar-item" target="_blank" href="https://github.com/iBlitzkriegi/Vixio/releases">Download Vixio</a>
                </div>
            </div>

            <a class="navbar-item" target="_blank" href="https://discord.gg/kNHmqYH"> 
                <span><i class="fab fa-discord"></i></span>
                <span style="margin-left: 5px;">Discord</span>
            </a>

        </div>
    </div>
</nav>
