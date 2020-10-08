$(function() {
	$('.area_tohoku').hover(function() {
		$("#p_tohoku").show();
	},function() {
		$("#p_tohoku").hide();
	});
	$('.area_kanto').hover(function() {
		$("#p_kanto").show();
	},function() {
		$("#p_kanto").hide();
	});
	$('.area_hokuriku').hover(function() {
		$("#p_hokuriku").show();
	},function() {
		$("#p_hokuriku").hide();
	});
	$('.area_tokai').hover(function() {
		$("#p_tokai").show();
	},function() {
		$("#p_tokai").hide();
	});
	$('.area_kinki').hover(function() {
		$("#p_kinki").show();
	},function() {
		$("#p_kinki").hide();
	});
	$('.area_chugoku').hover(function() {
		$("#p_chugoku").show();
	},function() {
		$("#p_chugoku").hide();
	});
	$('.area_shikoku').hover(function() {
		$("#p_shikoku").show();
	},function() {
		$("#p_shikoku").hide();
	});
	$('.area_kyusyu').hover(function() {
		$("#p_kyusyu").show();
	},function() {
		$("#p_kyusyu").hide();
	});
	$('.map_link').hover(function() {
		$(window).mousemove(function() {
			var mouse_x = event.clientX + 5;
			var mouse_y = $(window).scrollTop() + event.clientY + 5;
			$(".p_box").css({
				"left": mouse_x,
				"top": mouse_y
			});
		});
	});
});