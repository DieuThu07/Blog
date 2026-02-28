import type { SidebarLayoutConfig } from "../types/config";

/**
 * Cấu hình bố cục thanh bên (Sidebar)
 */
export const sidebarLayoutConfig: SidebarLayoutConfig = {
	// Có bật chức năng thanh bên hay không
	enable: true,

	// Vị trí thanh bên:
	// left: Chỉ hiển thị thanh bên trái
	// right: Chỉ hiển thị thanh bên phải
	// both: Hiển thị cả hai bên. Trên 1280px hiển thị cả hai, từ 769-1279px hiển thị một bên dựa theo tabletSidebar
	position: "both",

	// Phía thanh bên hiển thị trên máy tính bảng (769-1279px), chỉ có hiệu lực khi position là "both"
	// left: Hiển thị thanh bên trái trên máy tính bảng
	// right: Hiển thị thanh bên phải trên máy tính bảng
	tabletSidebar: "left",

	// Khi sử dụng một thanh bên (position là left hoặc right), có hiển thị cả hai bên ở trang chi tiết bài viết không
	// Nếu position là left và bật mục này, trang chi tiết bài viết sẽ hiển thị thêm thanh bên phải
	// Nếu position là right và bật mục này, trang chi tiết bài viết sẽ hiển thị thêm thanh bên trái
	// Thích hợp cho kịch bản chỉ muốn dùng một bên ở trang chủ, nhưng muốn hiện thêm mục lục ở bên đối diện trong bài viết
	showBothSidebarsOnPostPage: true,

	// Danh sách cấu hình các thành phần thanh bên trái
	// Thứ tự hiển thị phụ thuộc hoàn toàn vào thứ tự trong mảng, nhưng các thành phần "top" sẽ được ưu tiên hiển thị trước các thành phần "sticky"
	// type: Loại thành phần
	// enable: Có bật thành phần này không
	// position: Vị trí (top: cố định ở trên, sticky: dính theo khi cuộn trang)
	// showOnPostPage: Có hiển thị trong trang chi tiết bài viết không
	// showOnNonPostPage: Có hiển thị ở các trang khác không (ngoại trừ trang chi tiết bài viết)
	// configId: ID cấu hình (hiện chỉ dùng cho quảng cáo) để phân biệt các thiết lập quảng cáo khác nhau
	// responsive: Cấu hình phản hồi (dùng để thiết lập các thông số riêng cho một số thành phần)
	leftComponents: [
		{
			// Loại: Hồ sơ người dùng
			type: "profile",
			// Bật thành phần
			enable: true,
			// Vị trí
			position: "top",
			// Hiển thị trong trang bài viết
			showOnPostPage: true,
		},
		{
			// Loại: Thông báo
			type: "announcement",
			// Bật thành phần
			enable: true,
			// Vị trí
			position: "top",
			// Hiển thị trong trang bài viết
			showOnPostPage: true,
		},
		{
			// Loại: Trình phát nhạc
			type: "music",
			// Bật thành phần
			enable: true,
			// Vị trí
			position: "sticky",
			// Hiển thị trong trang bài viết
			showOnPostPage: true,
		},
		{
			// Loại: Danh mục
			type: "categories",
			// Bật thành phần
			enable: true,
			// Vị trí
			position: "sticky",
			// Hiển thị trong trang bài viết
			showOnPostPage: true,
			// Cấu hình phản hồi
			responsive: {
				// Ngưỡng thu gọn: Tự động thu gọn khi số lượng danh mục vượt quá 5
				collapseThreshold: 5,
			},
		},
		{
			// Loại: Thẻ (Tags)
			type: "tags",
			// Bật thành phần
			enable: true,
			// Vị trí
			position: "sticky",
			// Hiển thị trong trang bài viết
			showOnPostPage: true,
			// Cấu hình phản hồi
			responsive: {
				// Ngưỡng thu gọn: Tự động thu gọn khi số lượng thẻ vượt quá 20
				collapseThreshold: 20,
			},
		},
		{
			// Loại: Quảng cáo 1
			type: "advertisement",
			// Bật thành phần
			enable: false,
			// Vị trí
			position: "sticky",
			// Hiển thị trong trang bài viết
			showOnPostPage: true,
			// Sử dụng cấu hình quảng cáo số 1
			configId: "ad1",
		},
	],

	// Danh sách cấu hình các thành phần thanh bên phải
	rightComponents: [
		{
			// Loại: Thống kê trang web
			type: "stats",
			// Bật thành phần
			enable: true,
			// Vị trí
			position: "top",
			// Hiển thị trong trang bài viết
			showOnPostPage: true,
		},
		{
			// Loại: Lịch
			type: "calendar",
			// Bật thành phần
			enable: true,
			// Vị trí
			position: "sticky",
			// Hiển thị trong trang bài viết
			showOnPostPage: false,
		},
		{
			// Loại: Mục lục thanh bên (Chỉ hiển thị trong trang chi tiết bài viết)
			type: "sidebarToc",
			// Bật thành phần
			enable: true,
			// Vị trí
			position: "sticky",
			// Hiển thị trong trang bài viết
			showOnPostPage: true,
			// Không hiển thị ở các trang ngoài bài viết
			showOnNonPostPage: false,
		},
		{
			// Loại: Quảng cáo 2
			type: "advertisement",
			// Bật thành phần
			enable: false,
			// Vị trí
			position: "sticky",
			// Hiển thị trong trang bài viết
			showOnPostPage: true,
			// Sử dụng cấu hình quảng cáo số 2
			configId: "ad2",
		},
	],

	// Danh sách thành phần dưới đáy trên di động
	// Những thành phần này chỉ hiển thị ở cuối trang trên thiết bị di động (<768px), độc lập với cấu hình thanh bên trái/phải
	mobileBottomComponents: [
		{
			// Loại: Hồ sơ người dùng
			type: "profile",
			// Bật thành phần
			enable: true,
			// Hiển thị trong trang bài viết
			showOnPostPage: true,
		},
		{
			// Loại: Thông báo
			type: "announcement",
			// Bật thành phần
			enable: true,
			// Hiển thị trong trang bài viết
			showOnPostPage: true,
		},
		{
			// Loại: Trình phát nhạc
			type: "music",
			// Bật thành phần
			enable: true,
			// Hiển thị trong trang bài viết
			showOnPostPage: true,
		},
		{
			// Loại: Danh mục
			type: "categories",
			// Bật thành phần
			enable: true,
			// Hiển thị trong trang bài viết
			showOnPostPage: true,
			// Cấu hình phản hồi
			responsive: {
				collapseThreshold: 5,
			},
		},
		{
			// Loại: Thẻ (Tags)
			type: "tags",
			// Bật thành phần
			enable: true,
			// Hiển thị trong trang bài viết
			showOnPostPage: true,
			// Cấu hình phản hồi
			responsive: {
				collapseThreshold: 20,
			},
		},
		{
			// Loại: Thống kê trang web
			type: "stats",
			// Bật thành phần
			enable: true,
			// Hiển thị trong trang bài viết
			showOnPostPage: true,
		},
	],
};
