import type { MusicPlayerConfig } from "../types/config";

// Cấu hình trình phát nhạc
export const musicPlayerConfig: MusicPlayerConfig = {
	// Cách vô hiệu hóa trình phát nhạc:
	// Mặc định giao diện hiển thị ở cả thanh bên (sidebar) và thanh điều hướng (navbar)
	// 1. Thanh bên: Trong sidebarConfig.ts, đặt 'enable' của thành phần music thành 'false'.
	// 2. Thanh điều hướng: Trong tệp cấu hình này, đặt 'showInNavbar' thành 'false'.

	// Có hiển thị lối vào trình phát nhạc trên thanh điều hướng không
	showInNavbar: false,

	// Chế độ sử dụng: "meting" sử dụng Meting API, "local" sử dụng danh sách nhạc địa phương
	mode: "local",

	// Âm lượng mặc định (0-1)
	volume: 0.7,

	// Chế độ phát: 'list'=lặp lại danh sách, 'one'=lặp lại một bài, 'random'=phát ngẫu nhiên
	playMode: "list",

	// Có bật hiển thị lời bài hát không
	showLyrics: true,

	// Cấu hình Meting API
	meting: {
		// Địa chỉ Meting API
		// Mặc định sử dụng API chính thức, cũng có thể sử dụng API tùy chỉnh
		api: "https://api.i-meto.com/meting/api?server=:server&type=:type&id=:id&r=:r",
		// Nền tảng âm nhạc: netease=网易云 (NetEase), tencent=QQ音乐, kugou=酷狗, xiami=虾米, baidu=百度
		server: "netease",
		// Loại: song=bài hát đơn, playlist=danh sách phát, album=album, search=tìm kiếm, artist=nghệ sĩ
		type: "playlist",
		// ID danh sách/album/bài hát hoặc từ khóa tìm kiếm
		id: "10046455237",
		// Token xác thực (tùy chọn)
		auth: "",
		// Cấu hình API dự phòng (sử dụng khi API chính thất bại)
		fallbackApis: [
			"https://api.injahow.cn/meting/?server=:server&type=:type&id=:id",
			"https://api.moeyao.cn/meting/?server=:server&type=:type&id=:id",
		],
	},

	// Cấu hình nhạc địa phương (sử dụng khi mode là 'local')
	// 1. Hỗ trợ truyền đường dẫn tệp lời bài hát (.lrc)
	// lrc: "/assets/music/lrc/filename.lrc",
	// 2. Hoặc điền trực tiếp nội dung chuỗi lời bài hát
	// lrc: "[00:00.00]Nội dung lời bài hát...",
	local: {
		playlist: [
			{
				name: "VN/A Trap",
				artist: "Betekar",
				url: "https://audio.jukehost.co.uk/UuxgDcRjEmoZEmJPvgb93d5XjBecLx2G",
				cover: "https://img.inlove.eu.org/v2/kZdffc6.jpeg",
				lrc: "/assets/music/lyrics/vnatrap.lrc",
			},
			{
				name: "Em iu",
				artist: "Bâu cứt, gỗ, nghiện",
				url: "https://audio.jukehost.co.uk/3Y672q4ctH2VjK6XD9ACwuLwdBMd24WJ",
				cover: "https://img.inlove.eu.org/v2/6eFsSRZ.jpeg",
				lrc: "",
			},
		],
	},
};
