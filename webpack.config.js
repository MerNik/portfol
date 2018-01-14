// import { read } from 'fs';

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPugPlugin = require('html-webpack-pug-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
// const Pughtmlloader = require('pug-html-loader');
// const Rawloader = require('raw-loader');


const PATHS = {
		source: path.join(__dirname, 'source'),
		build: path.join(__dirname, 'build')
};

const devConfig = {
		devtool: 'source-map',
		entry: {
				'index': PATHS.source + '/pages/index/index.js',
				'blog': PATHS.source + '/pages/blog/blog.js',
				'work': PATHS.source + '/pages/work/work.js',
				'about': PATHS.source + '/pages/about/about.js',
				'main': PATHS.source + '/js/main.js',
				'webgl': PATHS.source + '/pages/index/water.js'
				// 'header': PATHS.source + '/pages/includes/_header/_header.js'
				// 'map': PATHS.source + '/pages/includes/_map/_map.js'
		},
		output: {
				path: PATHS.build,
				filename: './js/[name].js'
		},
		plugins: [
				require('autoprefixer'),
				// new HtmlWebpackPlugin({
				// 		filename: '_header.html',
				// 		chunks: ['_header', 'common'],
				// 		template: PATHS.source + '/pages/includes/_header/_header.pug'
				// }),
				new HtmlWebpackPlugin({
						filename: 'index.html',
						chunks: ['index', 'common', 'webgl'],
						template: PATHS.source + '/pages/index/index.pug'
				}),
				new HtmlWebpackPlugin({
						filename: 'blog.html',
						chunks: ['blog', 'common', 'main'],
						template: PATHS.source + '/pages/blog/blog.pug'
				}),
				new HtmlWebpackPlugin({
						filename: 'work.html',
						chunks: ['work', 'common', 'main'],
						template: PATHS.source + '/pages/work/work.pug'
				}),
				new HtmlWebpackPlugin({
						filename: 'about.html',
						chunks: ['about', 'common', 'main'],
						template: PATHS.source + '/pages/about/about.pug'
				}),
				new CleanWebpackPlugin('build'),
				new ExtractTextPlugin('./css/[name].css'), 
				new webpack.optimize.CommonsChunkPlugin({
						name: 'common'
				}),
				// new OptimizeCssAssetsPlugin({
				// 		cssProcessorOptions: { discardComments: {removeAll: true } }
				// }),
				// new StyleLintPlugin({
				// 		configFile: './.stylelintrc'
				// }),
				new webpack.ProvidePlugin({
						$: 'jquery',
						jQuery: 'jquery'
				}),
				new UglifyJSPlugin(),
				new CopyWebpackPlugin([
					{from: "./source/img", to: "images"}
				])

		],
		module: {
				rules: [
						{
								test: /\.pug$/,
								loader: 'pug-loader',
								options: {
										pretty: true
								}
						},
						{
								test: /\.(scss)$/,
								use: ExtractTextPlugin.extract({
										publicPath: '../',
										fallback: 'style-loader',
										use: [
											{
												loader: 'css-loader',
												options: 
												{ 
													sourceMap: true,
													minimize: false
												}
											},
											{
												loader: 'postcss-loader',
												options: {
														plugins: [
																autoprefixer({
																		browsers:['ie >= 9', 'last 2 version']
																})
														],
														sourceMap: true
												}
											},

											{
												loader: 'sass-loader'
											}
										]
								})
						},
						{
								test: /\.css$/,
								use: ExtractTextPlugin.extract({
										fallback: 'style-loader',
										use: 'css-loader'
								})
						},
						// {
						// 		test: /\.js$/,
						// 		enforce: "pre",
						// 		loader: "eslint-loader",
						// 		options: {
						// 				fix: false
						// 		}            
						// },
						{
								test: /\.(jpg|png|svg)$/,
								loader: 'file-loader',
								options: {
										name: 'images/[name].[ext]'
								}
						},
						{
								test: /\.(woff|woff2|ttf)$/,
								loader: 'file-loader',
								options: {
										name: 'css/fonts/[name].[ext]'
								}
						}                                     
				]
		}
		
};

const prodConfig = {
	entry: {
			'index': PATHS.source + '/pages/index/index.js',
			'blog': PATHS.source + '/pages/blog/blog.js',
			'work': PATHS.source + '/pages/work/work.js',
			'about': PATHS.source + '/pages/about/about.js',
			'main': PATHS.source + '/js/main.js',
			'webgl': PATHS.source + '/pages/index/water.js'
			// 'header': PATHS.source + '/pages/includes/_header/_header.js'
			// 'map': PATHS.source + '/pages/includes/_map/_map.js'
	},
	output: {
			path: PATHS.build,
			filename: './js/[name].js'
	},
	plugins: [
			require('autoprefixer'),
			// new HtmlWebpackPlugin({
			// 		filename: '_header.html',
			// 		chunks: ['_header', 'common'],
			// 		template: PATHS.source + '/pages/includes/_header/_header.pug'
			// }),
			new HtmlWebpackPlugin({
					filename: 'views/index/index.pug',
					chunks: ['index', 'common', 'webgl'],
					template: PATHS.source + '/pages/index/index.pug'
			}),
			new HtmlWebpackPlugin({
					filename: 'views/blog/blog.pug',
					chunks: ['blog', 'common', 'main'],
					template: PATHS.source + '/pages/blog/blog.pug'
			}),
			new HtmlWebpackPlugin({
					filename: 'views/work/work.pug',
					chunks: ['work', 'common', 'main'],
					template: PATHS.source + '/pages/work/work.pug'
			}),
			new HtmlWebpackPlugin({
					filename: 'views/about/about.pug',
					chunks: ['about', 'common', 'main'],
					template: PATHS.source + '/pages/about/about.pug'
			}),
			new HtmlWebpackPugPlugin(),
			new CleanWebpackPlugin('build'),
			new ExtractTextPlugin('./css/[name].css'), 
			new webpack.optimize.CommonsChunkPlugin({
					name: 'common'
			}),
			// new OptimizeCssAssetsPlugin({
			// 		cssProcessorOptions: { discardComments: {removeAll: true } }
			// }),
			// new StyleLintPlugin({
			// 		configFile: './.stylelintrc'
			// }),
			new webpack.ProvidePlugin({
					$: 'jquery',
					jQuery: 'jquery'
			}),
			new UglifyJSPlugin(),
			new CopyWebpackPlugin([
				{from: "./source/pages/includes/", to: "views/includes"},
				{from: "./source/pages/base.pug", to:"views"},
				{from: "./source/pages/_mixins.pug", to:"views"},
				{from: "./source/img", to: "images"}
			])

	],
	module: {
			rules: [
				// {
				// 	test: /\.pug$/,
				// 	loader: 'pug-loader',
				// 	options: {
				// 			pretty: true,
				// 	}
				// },			
					{
							test: /\.(scss)$/,
							use: ExtractTextPlugin.extract({
									publicPath: '../',
									fallback: 'style-loader',
									use: [
										{
											loader: 'css-loader',
											options: 
											{ 
												sourceMap: true,
												minimize: false
											}
										},
										{
											loader: 'postcss-loader',
											options: {
													plugins: [
															autoprefixer({
																	browsers:['ie >= 9', 'last 2 version']
															})
													],
													sourceMap: true
											}
										},

										{
											loader: 'sass-loader'
										}
									]
							})
					},
					{
							test: /\.css$/,
							use: ExtractTextPlugin.extract({
									fallback: 'style-loader',
									use: 'css-loader'
							})
					},
					// {
					// 		test: /\.js$/,
					// 		enforce: "pre",
					// 		loader: "eslint-loader",
					// 		options: {
					// 				fix: false
					// 		}            
					// },
					{
							test: /\.(jpg|png|svg)$/,
							loader: 'file-loader',
							options: {
									name: 'images/[name].[ext]'
							}
					},
					{
							test: /\.(woff|woff2|ttf)$/,
							loader: 'file-loader',
							options: {
									name: 'css/fonts/[name].[ext]'
							}
					}                                     
			]
	}
	
};

module.exports = function(env) {
	if (env === 'development') {
		return devConfig
	} else {
		return prodConfig
	}
}