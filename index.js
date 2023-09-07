const siyuan = require("siyuan");

class SmallWindow extends siyuan.Plugin {
  blockIconEventBindThis = this.blockIconEvent.bind(this);
  blockIconEvent({ detail }) {
    detail.menu.addItem({
        icon: "iconOpenWindow",
        label: "小窗打开",
        click: () => {
          siyuan.openWindow({
            doc: { id: detail.blockElements[0].dataset.nodeId },
            position: {
              x: parseInt(window.innerWidth - 700),
              y: parseInt(window.innerHeight / 9)
            },
            height: 500,
            width: 480
          })
        }
    })
  }
  onload() {
    this.eventBus.on("click-blockicon", this.blockIconEventBindThis);
    console.log("plugin small window start...")
  }

  onunload() {
    console.log("plugin small window stop...")
  }
};

module.exports = {
  default: SmallWindow,
};